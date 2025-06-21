"use client"
import { setupOnlineStatus } from "@/lib/utils"
import React, { useEffect } from "react"

export default function Online() {
    useEffect(() => {
        const visitor = localStorage.getItem('visitor')!
        setupOnlineStatus(visitor)

    }, [])
    return (<></>)
}