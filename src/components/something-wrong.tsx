import * as React from 'react'
import * as UI from "@/components/UI"

import { Button } from '@/components/UI/buttons/primary';
import LayoutMenu from "@/components/layouts/layout-menu";

export default function Wrong() {
    return (
        <LayoutMenu logo>
            <UI.Box>
                <UI.Header>Something went wrong</UI.Header>
            </UI.Box>
            <UI.Box mt={30}>
                <Button onClick={() => location.reload()} text={"Try again"}/>
            </UI.Box>
        </LayoutMenu>
    )
}
