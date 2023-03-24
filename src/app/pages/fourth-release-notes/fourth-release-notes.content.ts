import { ContactCard } from '../../components/contact-card/contact-card';
import { PageDataItems } from '../../components/page-data/page-data';
import { PageHeaderItems } from '../../components/page-header/page-header-items';
import { UseButton } from '../../components/use-button/use-button';

export const headerData: PageHeaderItems[] = [
    {
        image: 'assets/images/4th_release.svg',
        title: '4th Release Notes',
        subtitle: `See what's new in the 4th Release of the Human Reference Atlas (v1.3)`
    }
]

export const fourthReleaseIntro: PageDataItems[] = [
    {
        heading: '',
        descriptions: `
        <b>Introduction</b>
        <br><br>
        HuBMAP's Indiana University Mapping Component (MC-IU) has published the 4th Release of the Human Reference Atlas (v1.3), a digital atlas of the human body that lets users query & explore key anatomical structures, cell types, and biomarkers down to the cellular level.
        <br>
        
        `
    }
]

export const fourthReleaseStats: PageDataItems[] = [
    {
        heading: '',
        descriptions: `
**What's New**

* The Human Reference Atlas now includes **57 reference organs** with **1,588 anatomical structures**.
* **The following reference organs were added:** 
    * left/right female mammary glands
    * update to skin to accommodate addition of mammary glands and future skeletal muscle additions in legs
    * landmark organs added for mammary gland registration user interface (RUI) support: sternum, manubrium, xiphoid process, axillary tail of breast, lower outer quadrant of breast, lower inner quadrant of breast, upper outer quadrant of breast, lower inner quadrant of breast
* **13 ASCT+B tables were revised:** blood; blood vasculature; bone marrow; brain; eye; heart; large intestine; lymph vasculature; ovary; pancreas; small intestine, spleen; thymus
* **19 2D functional tissue unit (FTU) reference illustrations were added** to support Functional Tissue Unit (FTU) Explorer.
    * **kidney:** nephron, renal corpuscle, cortical collecting duct, outer medullary collecting duct, inner medullary collecting duct, thick ascending loop of Henle, thin ascending loop of Henle, thin descending loop of Henle
    * **large intestine:** crypt of Lieberkuhn
    * **liver:** liver lobule
    * **lung:** alveoli, bronchial submucosal gland
    * **pancreas:** acinus, islets of Langerhans, intercalated duct
    * **prostate:** prostate glandular acinus
    * **skin:** epidermal ridge, dermal papilla
    * **thymus:** thymus lobule
`
    }
]

export const hraHourEvent: PageDataItems[] = [
    {
        heading: '',
        descriptions: `<b>HRA 24 Hour Event</b>
        <br><br>
        Check out the videos from our 24 hour live HRA Event that happened on December 9-10, 2022. There is plenty of great content about atlasing.
        `
    }
]

export const hourEventUseButton: UseButton =
{
    text: 'HRA 24 Hour Event Videos',
    url: 'https://www.youtube.com/playlist?list=PL-CUnYVIy7DOVqQbrzhnLEtY8uoVHKXOI'
}

export const asctbTables: PageDataItems[] = [
    {
        heading: '',
        descriptions: `<b>ASCT+B Tables</b>
        <br><br>
        What is an ASCT+B table? 26 tables describe human anatomy, connect Anatomical Structures to Cell Types to Biomarkers.
        `
    }
]

export const asctbTablesButton: UseButton =
{
    text: 'Use the ASCT+B Tables',
    url: 'https://humanatlas.io/asctb-tables'
}

export const asctbReporter: PageDataItems[] = [
    {
        heading: '',
        descriptions: `<b>ASCT+B Reporter</b>
        <br><br>
        Want to visualize ASCT+B Tables? Check out ASCT+B Reporter to see the interconnectedness.
        `
    }
]

export const asctbReporterButton: UseButton =
{
    text: 'Use the ASCT+B Reporter',
    url: 'https://humanatlas.io/asctb-reporter'
}

export const ontologyValidations: PageDataItems[] = [
    {
        heading: '',
        descriptions: `<b>ASCT+B Ontology Validations</b>
        <br><br>
        How are ASCT+B Tables validated? We use Ubergraph to check all relationships experts have asserted in the tables against established ontologies (namely Uberon and Cell Ontology). 
        Check out the results in GitHub.
        `
    }
]

export const ontologyValidationsButton: UseButton =
{
    text: 'Validation Tools GitHub Repository',
    url: 'https://hubmapconsortium.github.io/ccf-validation-tools/'
}

export const threeDimRefObjects: PageDataItems[] = [
    {
        heading: '',
        descriptions: `<b>3D Reference Objects</b>
        <br><br>
        3D Reference Objects are models representing human organs registered with real data (tissue blocks) attached to them.
        `
    }
]

export const threeDimRefObjectsButton: UseButton =
{
    text: '4th Release 3D Reference Objects',
    url: 'https://humanatlas.io/3d-reference-library'
}

export const eui: PageDataItems[] = [
    {
        heading: '',
        descriptions: `<b>Exploration User Interface</b>
        <br><br>
        Check out the Exploration User Interface (EUI) to see our 3D Reference Objects in action.
        `
    }
]

export const euiButton: UseButton =
{
    text: 'Use the Exploration User Interface',
    url: 'https://humanatlas.io/exploration-user-interface'
}

export const rui: PageDataItems[] = [
    {
        heading: '',
        descriptions: `<b>Registration User Interface</b>
        <br><br>
        Use the RUI to spatially place your tissue block data.
        `
    }
]

export const ruiButton: UseButton =
{
    text: 'Use the Registration User Interface',
    url: 'https://humanatlas.io/registration-user-interface'
}

export const vrOrganGallery: PageDataItems[] = [
    {
        heading: '',
        descriptions: `<b>VR Organ Gallery</b>
        <br><br>
        Want to explore 3D organs in virtual reality? Check out the VR Organ Gallery.
        `
    }
]

export const vrOrganGalleryButton: UseButton =
{
    text: 'VR Organ Gallery',
    url: 'https://humanatlas.io/vr-organ-gallery'
}

export const previewButton1: UseButton =
{
    text: 'Preview: CCF Tissue Block Annotation: Mesh-Level Collision Detection',
    url: 'https://hubmapconsortium.github.io/hra-previews/pilots/pilot7.html'
}

export const previewButton2: UseButton =
{
    text: 'Preview: Comparing Tabula Sapiens to the Human Reference Atlas',
    url: 'https://hubmapconsortium.github.io/hra-previews/pilots/pilot5.html'
}

export const contactCardData: ContactCard[] = [
    {
        image: 'assets/images/katy_borner.svg',
        name: 'Katy Börner',
        field: 'Research',
        role: 'MC-IU PI, CNS Director',
        email: 'katy@indiana.edu'
    },
    {
        image: 'assets/images/bruce_herr.svg',
        name: 'Bruce Herr II ',
        field: 'Development',
        role: 'Sr. Systems Architect, PM',
        email: 'bherr@indiana.edu'
    },
    {
        image: 'assets/images/andreas_buckle.svg',
        name: 'Andreas Bueckle ',
        field: 'Research',
        role: 'Research Scientist',
        email: 'abueckle@iu.edu'
    }
];
