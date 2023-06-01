import { getCurrentUser } from '@/app/actions';
import getListingById from '@/app/actions/getListingById';
import { ClientOnly, EmptyState } from '@/app/components';
import React from 'react'

interface IParams {
    listingId?: string;
}


const ListingPage = async ({ params }: { params: IParams }) => {
    const currentUser = await getCurrentUser();
    const listing = await getListingById(params);


    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }


    return (
        <div>individual pageaaa</div>
    )
}

export default ListingPage