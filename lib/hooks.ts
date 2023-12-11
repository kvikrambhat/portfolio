import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold
    });
    const value = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - value?.timeOfLastClick > 1000)
            value?.setActiveSection(sectionName);
    }, [inView])
    return { ref }
}