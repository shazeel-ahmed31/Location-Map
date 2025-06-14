"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react"

const locationData = {
  name: "Our Islamabad Office",
  address: "F-7 Markaz, Islamabad, Pakistan",
  coordinates: "33.7294,73.0931",
  phone: "+92 51 123 4567",
  email: "contact@company.com",
  hours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  },
}

export default function Component() {
  const [mapLoaded, setMapLoaded] = useState(false)

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${locationData.coordinates}`
    window.open(url, "_blank")
  }

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${locationData.coordinates}`
    window.open(url, "_blank")
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Location
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visit Our Office</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Located in the heart of Islamabad, we're easily accessible and ready to serve you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-[500px]">
                  {!mapLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="text-gray-500">Loading map...</div>
                    </div>
                  )}
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0234567890123!2d73.0931!3d33.7294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQzJzQ1LjgiTiA3M8KwMDUnMzUuMiJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setMapLoaded(true)}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
                onClick={openInGoogleMaps}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in Maps
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
                onClick={openDirections}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Address</h4>
                      <p className="text-muted-foreground">{locationData.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <a
                        href={`tel:${locationData.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {locationData.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <a
                        href={`mailto:${locationData.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {locationData.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: {locationData.hours.weekdays}</p>
                        <p>Saturday: {locationData.hours.saturday}</p>
                        <p>Sunday: {locationData.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="w-full" onClick={openDirections}>
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              <Button variant="outline" className="w-full" onClick={() => window.open(`tel:${locationData.phone}`)}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Additional Info Card */}
            <Card className="border-0 shadow-lg bg-primary/5">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">Why Visit Us?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Free parking available
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Wheelchair accessible
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Public transport nearby
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Coffee and refreshments
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Nearby Landmarks</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <h4 className="font-semibold mb-2">Centaurus Mall</h4>
                  <p className="text-sm text-muted-foreground">5 minutes drive</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <h4 className="font-semibold mb-2">Pakistan Monument</h4>
                  <p className="text-sm text-muted-foreground">10 minutes drive</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <h4 className="font-semibold mb-2">Faisal Mosque</h4>
                  <p className="text-sm text-muted-foreground">15 minutes drive</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
