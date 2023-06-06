

import { getCurrentUser, getReservations } from '@/app/actions';
import getListingById from '@/app/actions/getListingById';
import { ClientOnly, EmptyState } from '@/app/components';
import React from 'react'
import ListingClient from './ListingClient';

interface IParams {
    listingId?: string;
}


const ListingPage = async ({ params }: { params: IParams }) => {
    const currentUser = await getCurrentUser();
    const reservations = await getReservations(params)
    const listing = await getListingById(params);


    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }


    return (
        <ClientOnly>
            <ListingClient
                listing={listing}
                currentUser={currentUser}
                reservations={reservations}
            />
        </ClientOnly>
    )
}

export default ListingPage