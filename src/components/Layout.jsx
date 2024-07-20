const classNames = (...classes) => classes.filter(Boolean).join(' ');

function Layout({ className, children, ...props }) {
    return (
        <div className={classNames('my-8', 'bg-white', 'w-3/5', 'rounded-lg', className)} {...props}>
            {children}
        </div>

    )
}

export default Layout