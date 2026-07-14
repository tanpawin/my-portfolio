const footer = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="flex justify-center items-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} Pawin Thitipong. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default footer