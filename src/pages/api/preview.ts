import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
    res.setPreviewData({preview}),
    res.writeHead(307, {location: '/'})
    res.end()
}