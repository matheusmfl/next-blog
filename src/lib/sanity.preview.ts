'use client'

import {definePreview} from 'next-sanity/preview'
import {projectId, dataset} from '@/lib/sanity.client'

export function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)

 
}

if (!projectId || !dataset) {
    throw new Error(`Está faltando ProjectId ou dataset. Check your sanity.json or .env`)
  }

export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})