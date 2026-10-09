"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import {demoLocation,mapLinks,phoneHref,emailHref,type LocationData} from '@/lib/location';
export default function Location({locationData=demoLocation}:{locationData?:LocationData}) {
  const [mapLoaded,setMapLoaded]=useState(false);
  const [mapFallback,setMapFallback]=useState(false);
  let links:ReturnType<typeof mapLinks>|null=null;
  try{links=mapLinks(locationData.latitude,locationData.longitude);}catch{}
  const embed=links?.embed;
  useEffect(()=>{setMapLoaded(false);setMapFallback(false);if(!embed)return;const timer=setTimeout(()=>setMapFallback(true),10000);return()=>clearTimeout(timer);},[embed]);
  const phone=phoneHref(locationData.phone);const email=emailHref(locationData.email);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Location
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Location Component Demo</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {locationData.demo ? "Demonstration location and contact details; no real office is represented." : locationData.name}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-[500px]">
                  {!links ? <p role="status" className="p-6">Map unavailable: invalid coordinates.</p> : <>
                    {!mapLoaded && <p role="status" className="p-4">{mapFallback ? 'Map is taking longer to load. Use the navigation links below.' : 'Loading map…'}</p>}
                    <iframe key={embed} title={`Map for ${locationData.name}`} src={embed} width="100%" height="100%" style={{border:0}} loading="lazy" referrerPolicy="no-referrer" onLoad={()=>setMapLoaded(true)} onError={()=>setMapFallback(true)} className="rounded-lg" />
                  </>}

                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3 mt-4">
              {links && <><a className="map-link" href={links.search} target="_blank" rel="noopener noreferrer">Open in Google Maps</a><a className="map-link" href={links.directions} target="_blank" rel="noopener noreferrer">Get Directions</a></>}
              <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">Map data © OpenStreetMap contributors</a>
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
                        href={phone}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {locationData.phone || "Not configured"}
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
                        href={email}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {locationData.email || "Not configured"}
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

            <p className="text-sm text-muted-foreground">Map and navigation links open third-party services. Contact details and hours are supplied by the component configuration.</p>
          </div>
        </div>


      </div>
    </section>
  )
}
