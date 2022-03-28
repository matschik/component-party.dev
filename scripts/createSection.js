import fs from "fs"

function getArgs(){
    const [componentName] = process.argv.slice(2);
    return {
        componentName
    }
}



const args = getArgs()

async function main(){
    fs.mkdirSync("new-section")

    const frameworks = [
        {
            name: "svelte",
            ext: "svelte"
        },
        {
            name: "react",
            ext: "jsx"
        },
        {
            name: "vue3",
            ext: "vue"
        }
    ]

    const componentName = args.componentName || "Component"

    for(const {name, ext} of frameworks){
        const dir = `new-section/${name}`
        fs.mkdirSync(dir)
        fs.writeFileSync(`${dir}/${componentName}.${ext}`, "")
    }
}

main().catch(console.error)