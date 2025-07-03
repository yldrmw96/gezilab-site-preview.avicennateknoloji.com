

type Slug = string

type CentralizedLinkFunction = (...args: any[]) => string

type Links = Record<Slug, CentralizedLinkFunction>


const links: Links = new Object() as Links

const _ = (
  key: string,
  value: CentralizedLinkFunction,
) => {
  links[key] = value
}

_('home', () => '/')

_('regions', () => '/vizeler/bolgeler')
_('region', (slug: Slug) => `/vizeler/bolge/${slug}`)

_('visas', () => '/vizeler')
_('visa', (slug: Slug) => `/vize/${slug}`)

_('corporateOffer', () => '/kurumsal-teklif-al')
_('jobApplication', () => '/is-basvurusu')
_('acentelikBasvurusu', () => '/acentelik-basvurusu')

_('contact', () => '/iletisim')
_('jobApplication', () => '/is-basvurusu')

_('turlar', () => '/turlar')
_('turlarKategori', (slug: Slug) => `/turlar/kategori/${slug}`)
_('tur', (slug: Slug) => `/tur/${slug}`)

export { links }
