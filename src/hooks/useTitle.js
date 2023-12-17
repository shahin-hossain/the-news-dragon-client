import { useEffect } from 'react'
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Dragon News`;
    }, [])
}
export default useTitle;