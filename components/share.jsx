'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";


export default function Share() {
    const [urlToCopy, setUrlToCopy] = useState('https://quasilenses.vercel.app')
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(urlToCopy).then(() => {
            setIsCopied(true)
        }).catch((error) => {
            console.log('Failed to copy: ', error);
        })
    }
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="none" className='flex flex-col items-center'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512"><style></style><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                        </div>
                         <p className="text-xs">Share</p>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogTitle className='text-center'>quasilenses</DialogTitle>
                    <DialogDescription className='text-center mb-4'>
                        Send my portfolio to anyone.
                    </DialogDescription>
                    <input
                    type="text"
                    value={urlToCopy} 
                    readOnly
                    className="p-2"
                    onChange={(e) => setUrlToCopy(e.target.value)}
                     />
                    <Button 
                        onClick={copyToClipboard}
                        className='mt-6'
                    >
                        Copy page URL
                    </Button>
                    {isCopied && <div className="text-center">URL copied to clipboard!</div>}
                </DialogContent>
            </Dialog>
        </>
    )
}