import { useEffect, useState } from "react";
export function useInfiniteScroll(callback, threshold) {
    if (threshold === void 0) { threshold = 100; }
    var _a = useState(false), isLoading = _a[0], setIsLoading = _a[1];
    useEffect(function () {
        var handleScroll = function () {
            if (window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - threshold) {
                if (!isLoading) {
                    setIsLoading(true);
                    callback();
                    setTimeout(function () { return setIsLoading(false); }, 500); // mock delay
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, [isLoading, callback, threshold]);
    return isLoading;
}
