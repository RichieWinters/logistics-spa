import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import ru from "react-phone-number-input/locale/ru.json";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const PhoneInputContext = React.createContext();

const PhoneInput = React.forwardRef(({ className, onChange, value, ...props }, ref) => {
  const [selectedCountry, setSelectedCountry] = React.useState("BY");

  return (
    <PhoneInputContext.Provider
      value={{
        className,
        phoneInputOnChange: onChange,
        selectedCountry,
        setSelectedCountry,
      }}
    >
      <RPNInput.default
        ref={ref}
        className="flex w-full"
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        smartCaret={false}
        value={value || undefined}
        labels={ru}
        defaultCountry="BY"
        /**
         * Handles the onChange event.
         *
         * react-phone-number-input might trigger the onChange event as undefined
         * when a valid phone number is not entered. To prevent this,
         * the value is coerced to an empty string.
         *
         * @param {E164Number | undefined} value - The entered value
         */
        onChange={(value) => onChange?.(value || "")}
        {...props}
      />
    </PhoneInputContext.Provider>
  );
});
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef(({ className, onChange, ...props }, ref) => {
  const context = React.useContext(PhoneInputContext);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Если есть выбранная страна и пользователь начинает вводить номер
    if (context?.selectedCountry && inputValue && !inputValue.startsWith("+")) {
      const countryCallingCode = RPNInput.getCountryCallingCode(context.selectedCountry);
      const newPhoneNumber = `+${countryCallingCode}${inputValue}`;

      // Обновляем через контекст
      if (context?.phoneInputOnChange) {
        context.phoneInputOnChange(newPhoneNumber);
      }
    } else {
      // Обычное изменение
      if (onChange) {
        onChange(e);
      }
    }
  };

  return (
    <Input
      className={cn("rounded-e-lg rounded-s-none", context?.className, className)}
      onChange={handleInputChange}
      {...props}
      ref={ref}
    />
  );
});
InputComponent.displayName = "InputComponent";

const CountrySelect = ({ disabled, value: selectedCountry, options: countryList, onChange }) => {
  const context = React.useContext(PhoneInputContext);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCountryChange = (country) => {
    // Просто обновляем страну в контексте
    if (context?.setSelectedCountry) {
      context.setSelectedCountry(country);
    }

    // Также вызываем стандартный onChange для библиотеки
    onChange(country);
  };
  return (
    <Popover
      open={isOpen}
      modal
      onOpenChange={(open) => {
        setIsOpen(open);
        open && setSearchValue("");
      }}
    >
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "cursor-pointer flex h-inherit gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10",
            context?.className,
          )}
          disabled={disabled}
        >
          <FlagComponent country={selectedCountry} countryName={selectedCountry} />
          <ChevronsUpDown className={cn("-mr-2 size-4 opacity-50", disabled ? "hidden" : "opacity-100")} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 bg-white">
        <Command>
          <CommandInput
            value={searchValue}
            onValueChange={(value) => {
              setSearchValue(value);
            }}
            placeholder="Поиск страны..."
          />
          <CommandList className="max-h-72 overflow-hidden">
            <CommandEmpty>Нет стран.</CommandEmpty>
            <CommandGroup className="p-0">
              <ScrollArea className="h-72">
                <div className="p-1">
                  {countryList.map(({ value, label }) =>
                    value ? (
                      <CountrySelectOption
                        key={value}
                        country={value}
                        countryName={label}
                        selectedCountry={selectedCountry}
                        onChange={handleCountryChange}
                        onSelectComplete={() => setIsOpen(false)}
                      />
                    ) : null,
                  )}
                </div>
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const CountrySelectOption = ({ country, countryName, selectedCountry, onChange, onSelectComplete }) => {
  const handleSelect = () => {
    onChange(country);
    onSelectComplete();
  };

  return (
    <CommandItem
      className="gap-2 bg-white rounded-none cursor-pointer hover:bg-gray-100 transition-colors duration-200"
      onSelect={handleSelect}
    >
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-sm text-foreground/50">{`+${RPNInput.getCountryCallingCode(country)}`}</span>
      <CheckIcon className={`ml-auto size-4 ${country === selectedCountry ? "opacity-100" : "opacity-0"}`} />
    </CommandItem>
  );
};

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg:not([class*='size-'])]:size-full">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };
