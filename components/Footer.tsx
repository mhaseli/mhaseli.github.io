export default function Footer() {
    return (
        <footer className="py-8 mt-20 border-t border-border bg-secondary/30 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-6 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Masih Haseli. All rights reserved.</p>
            </div>
        </footer>
    );
}
