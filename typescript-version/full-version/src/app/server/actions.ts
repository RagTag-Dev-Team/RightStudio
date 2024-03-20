/**
 * ! The server actions below are used to fetch the static data from the fake-db. If you're using an ORM
 * ! (Object-Relational Mapping) or a database, you can swap the code below with your own database queries.
 */

'use server'

// Type Imports
import type { AddEventType, EventType } from '@/types/apps/calendarTypes'

// Data Imports
import { events } from '@/fake-db/apps/calendar'
import { db as invoiceData } from '@/fake-db/apps/invoice'
import { db as userData } from '@/fake-db/apps/user-list'
import { db as permissionData } from '@/fake-db/apps/permissions'
import { db as profileData } from '@/fake-db/pages/user-profile'
import { db as faqData } from '@/fake-db/pages/faq'
import { db as pricingData } from '@/fake-db/pages/pricing'
import { icons as iconTest } from '@/fake-db/icons-test'

export const getCalendarEvents = async () => {
  return events
}

export const addCalendarEvent = async (event: AddEventType) => {
  const newEvent = { id: events[events.length - 1].id + 1, ...event }

  events.push(newEvent)

  return newEvent
}

export const updateCalendarEvent = async (event: EventType) => {
  events.forEach((item, index) => {
    if (item.id === event.id) {
      events[index] = event
    }
  })

  return event
}

export const deleteCalendarEvent = async (eventId: number) => {
  // find index of event
  const index = events.findIndex(e => e.id === eventId)

  // remove event
  events.splice(index, 1)

  return eventId
}

export const getInvoiceData = async () => {
  return invoiceData
}

export const getUserData = async () => {
  return userData
}

export const getPermissionsData = async () => {
  return permissionData
}

export const getProfileData = async () => {
  return profileData
}

export const getFaqData = async () => {
  return faqData
}

export const getPricingData = async () => {
  return pricingData
}

export const getIconTest = async () => {
  return iconTest
}
