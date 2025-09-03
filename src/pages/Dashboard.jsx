import React from 'react'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-card rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Active Shipments</h3>
          <p className="text-2xl font-bold text-primary">24</p>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Deliveries Today</h3>
          <p className="text-2xl font-bold text-green-600">12</p>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Pending Orders</h3>
          <p className="text-2xl font-bold text-orange-600">8</p>
        </div>
      </div>
    </div>
  )
}
