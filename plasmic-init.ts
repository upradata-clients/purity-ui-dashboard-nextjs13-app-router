import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "bwaJfHUVWmBdoDpbx4dya8",
            token: "rzWW31iUh8merHRxQDOidqjzl4MRcc9rUQC9eG99fN3DXhZ3Y0atvJQ5W31fcDKYJLlfGan7zRKEHaIfBYQ",
        },
    ],

    // By default Plasmic will use the last published version of your project.
    // For development, you can set preview to true, which will use the unpublished
    // project, allowing you to see your designs without publishing.  Please
    // only use this for development, as this is significantly slower.
    preview: false,
});
