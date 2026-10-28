# Contemporary artwork image acquisition — research protocol

Updated 2026-10-27. Scope: work made circa 2000–present by artists active or influential during the past 25+ years. This is not a general public-domain museum browser.

## Editorial rules
1. Select historically significant artists and 5–10 representative works **before** searching for images.
2. Verify each work's title, date, medium, dimensions, collection, and attribution against a museum or artist record.
3. Record the original artwork copyright **separately** from the photograph copyright. Museum availability, IIIF endpoints, social previews, and a Creative Commons photograph do not automatically license the depicted artwork.
4. Assign one image state: `cleared` (evidence and attribution recorded), `permission_requested`, `permission_required`, `review_required`, or `link_only`.
5. Only `cleared` artworks may be rendered as local or remotely hosted images on Atlas; otherwise show the institutional viewing link.
6. Keep an exact source URL, access/review date, permitted uses, attribution text, and any restrictions. Never silently interpret missing rights data as public domain.
7. Provide APA 7 references for research prose; use distinct object-image credit lines for artwork.

## Julie Mehretu: licensing pathway

**SFMOMA:** https://www.sfmoma.org/artist/Julie_Mehretu/ — museum explicitly directs educational, scholarly and publication image requests to copyright@sfmoma.org. Proposed first request: `HOWL, eon (I, II)` (2016–2017), for a noncommercial, publicly accessible educational artist research website.

**Whitney:** https://whitney.org/collection/images-and-permissions — collection and archival images via Scala Archives; Whitney says the image provider may not clear the underlying artist copyright. Whitney exhibition images identify © Julie Mehretu: https://whitney.org/exhibitions/julie-mehretu/art.

**Carnegie:** https://collection.carnegieart.org/objects/3229aff9-ee40-4ef0-9789-106221a25892 — `Stadia II` (2004) identifies © artist or artist's estate. See museum's image licensing service.

**MoMA:** https://www.moma.org/collection/works/459800 — `Everywhen` (2021–2023), copyright © Julie Mehretu; museum directs reproduction inquiries to Art Resource/Scala Archives.

## Proposed permission request (do not send without user approval)

Subject: Educational website image permission inquiry — Julie Mehretu

Hello,

I am developing Contemporary Art Atlas, a publicly accessible, noncommercial educational research resource about significant contemporary artists and their work. I am writing to ask about permission to display a web-resolution reproduction of Julie Mehretu's *HOWL, eon (I, II)* (2016–2017) on the artist's research profile, with a full credit line, link to SFMOMA's collection record, and scholarly citations.

Could you advise whether the museum can license the photograph for this use, whether additional artist-rights clearance is required, any required attribution, permitted resolution, duration, or fees? I will not publish the image unless the applicable permissions are established.

Thank you for your guidance.

## Next implementation
Create artist-specific artwork JSON records and galleries whose inline images appear only when image_status is `cleared`; otherwise present a prominent museum-viewing card. The current museum API explorer remains secondary and should not drive artist selection.
