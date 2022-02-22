import React from "react";
import kavapp from "../../../assets/img/kavapp.png"
import seller from "../../../assets/img/seller.png"
import delivery from "../../../assets/img/delivery.png"
import admin from "../../../assets/img/admin.png"

import "./portfoljo-kavapp.scss"

function PortfolioKavapp() {
    return (
        <div className="portfolio-kavapp-wrapper">
           <div className="kavapp-wrapper">
               <div className="title">KavApp</div>
               <img src={kavapp} alt="kavapp"/>
              <div className="text-block">
                  <h1>What we did:</h1>
                  <span className="text">
                    - The global structure of the project is developed according to business goals<br/>
                    - Decided on the design and functionality of the project according to the budget and conditions of the customer.<br/>
                    - Security and encryption of confidential data.<br/>
                    - Developed and implemented API for the program and global database (using PHP, Laravel, MySQL)<br/>
                    - Connected payment system (using Liqpay)
                 </span>
              </div>
           </div>
            <div className="kavapp-seller-wrapper">
                <img src={seller} alt="seller"/>
                <div className="text-block">
                    <span className="text">
                        <span className="title-text">Kavapp Seller - </span>
                         Mobile application for Android and iOS.<br/>
                         Its purpose is to facilitate and at the same time control the<br/>
                         work of the barista. With the help of the program, the<br/>
                         employee opens the work shift, registers sales, orders and<br/>
                         writes off ingredients, confirms fees, closes the shift, and so on.
                        <p>
                        The application automatically downloads from the server<br/>
                        menus, prices, directories of workers, goods, ingredients, as<br/>
                        well as downloads to the server a list of sold checks and other<br/>
                        necessary information. The application can work autonomously<br/>
                        and synchronize when connected to the Internet.
                        </p>
                    </span>
                    <h1>What we did:</h1>
                </div>
            </div>
            <div className="kavapp-delivery-wrapper">
                <div className="text-block">
                    <span className="text">
                        <span className="title-text">Kavapp Delivery - </span>
                         Mobile application for Android and iOS.
                        <p>
                        Designed to control the movement of goods from the warehouse<br/>
                        to the cafe. In the complex of the whole system you can order<br/>
                        goods to the warehouse,from the warehouse with the help of the<br/>
                        application to record the amountof goods delivered to the cafe,<br/>
                        know the amount of goods that went to prepare drinks<br/>
                        - respectively, you can see the rest of the goods in the cafe in real<br/>
                        time. mobile phone.
                        </p>
                    </span>
                    <h1>What we did:</h1>
                </div>
                <img src={delivery} alt="delivery"/>
            </div>
            <div className="kavapp-admin-wrapper">
                <img src={admin} alt="admin"/>
                <div className="text-block">
                    <span className="text">
                        <span className="title-text">Kavapp Admin - </span>
                        The admin panel, created as both a Web<br/>
                        site and a Web application, is designed to manage the Kavapp<br/>
                        Seller and Kavapp Delivery mobile applications and to make it<br/>
                        easier for the coffee shop administrator to work. It is easy to<br/>
                        change and supplement all the information on the menu of the<br/>
                        cafe, work with staff (calculation of salaries, advance<br/>
                        payments, accrual of fines and bonuses, etc.), work with the<br/>
                        warehouse, create and manage promotions and discount<br/>
                        system in the cafe, and also see all the necessary graphs and<br/>
                        reports in real time.
                        <p>
                        The website also has a mobile version through which it is<br/>
                        convenient to have access to all the features of the panel<br/>
                        administrator with mobile phone.
                        </p>
                    </span>
                    <h1>What we did:</h1>
                </div>
            </div>
        </div>
    )
}

export default PortfolioKavapp