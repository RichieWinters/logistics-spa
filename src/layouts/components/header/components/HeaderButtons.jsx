import { Button } from "@/components/ui/button";
import ScrollToContactButton from "@/components/ScrollToContactButton";

export const HeaderButtons = () => {
  return (
    <div className="flex w-full flex-col md:flex-row gap-4 sm:gap-8 mt-4">
      {/* First Button - Opens Dialog */}
      <ScrollToContactButton className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-9 py-6 min-w-[150px] text-lg transition-colors disabled:opacity-50 cursor-pointer rounded-xl" />

      {/* Second Button - Makes Phone Call */}
      <Button
        asChild
        className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-9 py-6 min-w-[150px] text-lg transition-colors disabled:opacity-50 cursor-pointer rounded-xl"
      >
        <a href="tel:+375291234567">+375 29 123 45 67</a>
      </Button>
    </div>
  );
};
