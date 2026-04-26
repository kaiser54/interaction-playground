export default function Footer() {
    return (
        <section className="container-wrapper space-y-4 w-full p-4">
            <h2 className="text-sm font-medium text-default">Get in touch</h2>
            <p className="text-sm text-neutral">I'm always looking for new opportunities and collaborations. Feel free to reach out to me via email or LinkedIn.</p>
            <div className="pt-2 space-y-2 text-sm text-neutral flex items-center gap-4">
                <a className="mb-0 p-1 cursor-pointer hover:underline" href="mailto:temitope@posthearts.com">
                    Gmail
                </a>
                <a
                    className="mb-0 p-1 cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/temitope-agboola/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className="mb-0 p-1 cursor-pointer hover:underline"
                    href="https://github.com/temitope-agboola"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    className="mb-0 p-1 cursor-pointer hover:underline"
                    href="https://x.com/temitope_agboola"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    X
                </a>
            </div>
        </section>
    )
}
