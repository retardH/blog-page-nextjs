
const BaseLayout = ({children}) => {
    return (
        <main className="mx-auto container px-4 py-8 bg-stone-300">
            {children}
        </main>
    )
}

export default BaseLayout;