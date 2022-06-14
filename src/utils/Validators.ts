const validateCellInput = (input: string): boolean => {
    const pattern = /^[1-9]$/
    if (input.length === 0 || pattern.test(input)) {
        return true
    }
    return false
}

export { validateCellInput }