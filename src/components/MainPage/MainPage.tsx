'use client'

import { ConfirmSection } from "../ConfirmSection/ConfirmSection"
import { CountDownSection } from "../CountDownSection/CountDownSection"
import { FooterSection } from "../FooterSection/FooterSection"
import { HeroSection } from "../HeroSection/HeroSection"
import { HeroSetionMobile } from "../HeroSection/HeroSetionMobile"
import { PhraseSection } from "../PhraseSection/PhraseSection"
import { PlaceSection } from "../PlaceSection/PlaceSection"
import { SliderSection } from "../SliderSection/SliderSection"


import { isMobile } from "react-device-detect";


export const MainPage = () => {
  return <>
    {isMobile ? <HeroSetionMobile /> : <HeroSection />}
    <CountDownSection />
    <PlaceSection />
    <SliderSection />
    <PhraseSection />
    <ConfirmSection />
    <FooterSection />
  </>
} 