import React from 'react'
import { getCurrentUser, getReservations } from '../actions'
import { ClientOnly, EmptyState } from '../components'
import TripsClient from './TripsClient'


const Tripspage = async () => {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle='Please login'
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({ userId: currentUser.id })

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No trips found"
                    subtitle='Looks like you havent reserved any trips'

                />
            </ClientOnly>
        )
    }


    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

}

export default Tripspage