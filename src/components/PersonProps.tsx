export type Name = { //reusable type than can be used to other exported type. 
    // always export the type and import in every file.tsx when used

    first: string
    last: string
}



export type PersonProps = {  //applied in large amount of data. Exported and imported to Person.tsx
    name : Name }