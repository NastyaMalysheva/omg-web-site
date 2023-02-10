import React, {useState, useEffect} from "react"
import {useTranslation} from "react-i18next";
import mobile from "../../assets/img/mobile.png";
import web from "../../assets/img/web.png";
import design from "../../assets/img/design.png";

import "./slider.scss"


function Slider() {
    const {t, i18n} = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        <div className="slide" key={1}>
            <div className="title">{t('mobile')}</div>
            <div className="block">
              <span className="text">
               <p>Nowadays, mobile application is a necessity of every business <br/>
                   that wants to develop. We are constantly monitoring the <br/>
                   latest trends and technologies and implementing them in the <br/>
                   development of mobile applications.Our developers are highly <br/>
                   qualified specialists who will create reliable code, user-friendly <br/>
                   interface and pleasant design of your mobile application.<br/>
                   We will make your applications competitive and profitable</p>
                  <p>In application development we use: Flutter, Dart, Kotlin, Xcode, Android Studio.</p>
               </span>
                <img src={mobile} alt="mobile"/>
            </div>
        </div>,

        <div className="slide" key={2}>
            <div className="title">{t("web")}</div>
            <div className="block">
                <img src={web} alt="web"/>
                <span className="text">
                <p>
                     Web development has a very wide range of possibilities.<br/>
                    These are sophisticated Web applications, and online stores, and<br/>
                    static websites, and APIs for mobile applications. And depending on the<br/>
                    functionality of the site, developers face completely different<br/>
                    challenges. We have extensive experience in web development and<br/>
                    can develop projects of any complexity on both the client and server<br/>
                    side. And regardless of the complexity of the task, our developers<br/>
                    always do their job well, the result of which is a completed project and<br/>
                    a happy customer.
                </p>
                In web development we use: React, Javascript, CSS, HTML,<br/>
                Node.js, PHP, Lavarel, MySQL.
                </span>
            </div>
        </div>,

        <div className="slide" key={3}>
            <div className="title">{t('design')}</div>
            <div className="block">
              <span className="text">
                <p>
                    Project design is evaluated by customers first than its<br/>
                    functionality. That is why a user-friendly interface and a<br/>
                    nice design are the most important features of a mobile or<br/>
                    web application. Our designers are constantly working to create<br/>
                    a great design that will interest your customers and emphasize<br/>
                    the functionality of your application. We are constantly interested<br/>
                    in the latest UI/UX design trends and create user-friendly<br/>
                    applications that look great.
                </p>
                  To develop the design we use: Figma, Adobe Illustrator,<br/>
                  Adobe Photoshop.
              </span>
                <img src={design} alt="design"/>
            </div>
        </div>
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === slides.length - 1 ? 0 : current + 1
                return res
            })
        }, 15000)
        return () => clearInterval()
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : slides.length - 1
    const nextImgIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1

    return (
        <div className="slider">
            <div className="slider-img slider-img-prev"
                 key={prevImgIndex}>
                {slides[prevImgIndex]}
            </div>
            <div className="slider-img"
                 key={activeIndex}>
                {slides[activeIndex]}
            </div>
            <div className="slider-img slider-img-next"
                 key={nextImgIndex}>
                {slides[nextImgIndex]}
            </div>
        </div>
    )
}

export default Slider