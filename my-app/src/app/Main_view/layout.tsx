import "@/styles/css/reset.css";
import "@/styles/css/fonts.css";
import "@/styles/css/common.css";
import React from "react";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
        <body>
            <div className="wrap">
            {/* header: S */}
            <header className="header">
                <div className="header_menu">
                    <div className="header_left">
                        <h1 className="logo"><a href="javascrip:;"><img src="assets/images/common/img_logo.svg" alt="SKT QAS" /></a></h1>
                        <nav className="nav">
                            <ul className="gnb_menu">
                                <li className="active">
                                    <a href="#"><h2>업무현황</h2></a>
                                    <div className="depth2_slide_wrap">
                                        <ul className="depth2">
                                            <div className="depth2_left">
                                                <h3 className="depth2_tit">업무현황</h3>
                                            </div>
                                            <div className="depth2_right">
                                                <ul className="depth2_list">
                                                    <li><a href="#">납품검사현황</a></li>
                                                    <li><a href="#">일반현황</a></li>
                                                </ul>
                                            </div>
                                        </ul>            
                                    </div>                    
                                </li>
                                <li>
                                    <a href="#"><h2>납품검사</h2></a>
                                    <div className="depth2_slide_wrap">
                                        <ul className="depth2">
                                            <div className="depth2_left">
                                                <h3 className="depth2_tit">납품검사</h3>
                                            </div>
                                            <div className="depth2_right">
                                                <ul className="depth2_list">
                                                    <li><a href="#">검사필증 선발행</a></li>
                                                    <li><a href="#">납품검사 관리</a></li>
                                                    <li><a href="#">시험성적서 분석</a></li>
                                                    <li><a href="#">시정조치</a></li> 
                                                    <li><a href="#">불합격 판정조회</a></li> 
                                                    <li><a href="#">ERP 승인(자동)</a></li> 
                                                    <li><a href="#">ERP 미승인 물품조회</a></li> 
                                                    <li><a href="#">인증시험 관리</a></li> 
                                                    <li><a href="#">선납신청 및 조회(결과조회)</a></li> 
                                                    <li><a href="#">선납신청 및 조회(신청서 작성)</a></li> 
                                                    <li><a href="#">선납신청 및 조회(QAS선납 승인)</a></li>
                                                    <li><a href="#">ERP 미승인 물품조회</a></li> 
                                                    <li><a href="#">인증시험 관리</a></li> 
                                                </ul>
                                            </div>
                                        </ul>            
                                    </div>      
                                </li>
                                <li>
                                    <a href="#"><h2>사후품질 분석</h2></a>
                                    <div className="depth2_slide_wrap">
                                        <ul className="depth2">
                                            <div className="depth2_left">
                                                <h3 className="depth2_tit">사후품질 분석</h3>
                                            </div>
                                            <div className="depth2_right">
                                                <ul className="depth2_list">
                                                    <li><a href="#">검사필증 선발행</a></li>
                                                    <li><a href="#">납품검사 관리</a></li>
                                                    <li><a href="#">시험성적서 분석</a></li>
                                                    <li><a href="#">시정조치</a></li> 
                                                    <li><a href="#">불합격 판정조회</a></li> 
                                                    <li><a href="#">ERP 승인(자동)</a></li> 
                                                    <li><a href="#">ERP 미승인 물품조회</a></li> 
                                                    <li><a href="#">인증시험 관리</a></li> 
                                                    <li><a href="#">선납신청 및 조회(결과조회)</a></li> 
                                                    <li><a href="#">선납신청 및 조회(신청서 작성)</a></li> 
                                                    <li><a href="#">선납신청 및 조회(QAS선납 승인)</a></li>
                                                    <li><a href="#">ERP 미승인 물품조회</a></li> 
                                                    <li><a href="#">인증시험 관리</a></li>
                                                    <li><a href="#">검사필증 선발행</a></li>
                                                    <li><a href="#">납품검사 관리</a></li>
                                                    <li><a href="#">시험성적서 분석</a></li>
                                                    <li><a href="#">검사필증 선발행</a></li>
                                                    <li><a href="#">납품검사 관리</a></li>
                                                    <li><a href="#">시험성적서 분석</a></li>
                                                    <li><a href="#">검사필증 선발행</a></li>
                                                    <li><a href="#">납품검사 관리</a></li>
                                                    <li><a href="#">시험성적서 분석</a></li>
                                                </ul>
                                            </div>
                                        </ul>            
                                    </div>            
                                </li>
                                <li>
                                    <a href="#"><h2>커뮤니티</h2></a>
                                    <div className="depth2_slide_wrap">
                                        <ul className="depth2">
                                            <div className="depth2_left">
                                                <h3 className="depth2_tit">커뮤니티</h3>
                                            </div>
                                            <div className="depth2_right">
                                                <ul className="depth2_list">
                                                    <li><a href="#">검사필증 선발행</a></li>
                                                    <li><a href="#">납품검사 관리</a></li>
                                                    <li><a href="#">시험성적서 분석</a></li>
                                                    <li><a href="#">시정조치</a></li> 
                                                    <li><a href="#">불합격 판정조회</a></li> 
                                                </ul>
                                            </div>
                                        </ul>            
                                    </div>       
                                </li>
                                <li>
                                    <a href="#"><h2>관리</h2></a>
                                    <div className="depth2_slide_wrap">
                                        <ul className="depth2">
                                            <div className="depth2_left">
                                                <h3 className="depth2_tit">관리</h3>
                                            </div>
                                            <div className="depth2_right">
                                                <ul className="depth2_list">
                                                    <li><a href="#">검사필증 선발행</a></li>
                                                    <li><a href="#">납품검사 관리</a></li>
                                                    <li><a href="#">시험성적서 분석</a></li>
                                                    <li><a href="#">시정조치</a></li> 
                                                    <li><a href="#">불합격 판정조회</a></li> 
                                                    <li><a href="#">ERP 승인(자동)</a></li> 
                                                    <li><a href="#">ERP 미승인 물품조회</a></li> 
                                                    <li><a href="#">인증시험 관리</a></li> 
                                                    <li><a href="#">선납신청 및 조회(결과조회)</a></li> 
                                                    <li><a href="#">선납신청 및 조회(신청서 작성)</a></li> 
                                                </ul>
                                            </div>
                                        </ul>            
                                    </div>    
                                </li>
                                <li>
                                    <a href="#"><h2>시스템 관리</h2></a>
                                    <div className="depth2_slide_wrap">
                                        <ul className="depth2">
                                            <div className="depth2_left">
                                                <h3 className="depth2_tit">시스템 관리</h3>
                                            </div>
                                            <div className="depth2_right">
                                                <ul className="depth2_list">
                                                    <li><a href="#">검사필증 선발행</a></li>
                                                    <li><a href="#">납품검사 관리</a></li>
                                                    <li><a href="#">시험성적서 분석</a></li>
                                                    <li><a href="#">시정조치</a></li> 
                                                    <li><a href="#">불합격 판정조회</a></li> 
                                                    <li><a href="#">ERP 승인(자동)</a></li> 
                                                    <li><a href="#">ERP 미승인 물품조회</a></li> 
                                                    <li><a href="#">인증시험 관리</a></li> 
                                                    <li><a href="#">선납신청 및 조회(결과조회)</a></li> 
                                                    <li><a href="#">선납신청 및 조회(신청서 작성)</a></li> 
                                                    <li><a href="#">선납신청 및 조회(QAS선납 승인)</a></li>
                                                    <li><a href="#">ERP 미승인 물품조회</a></li> 
                                                    <li><a href="#">인증시험 관리</a></li>
                                                    <li><a href="#">선납신청 및 조회(신청서 작성)</a></li> 
                                                    <li><a href="#">선납신청 및 조회(QAS선납 승인)</a></li>
                                                    <li><a href="#">ERP 미승인 물품조회</a></li> 
                                                    <li><a href="#">인증시험 관리</a></li> 
                                                </ul>
                                            </div>
                                        </ul>            
                                    </div>                      
                                </li>
                                <li>
                                    <a href="#"><h2>품질보증 소개</h2></a>
                                    <div className="depth2_slide_wrap">
                                        <ul className="depth2">
                                            <div className="depth2_left">
                                                <h3 className="depth2_tit">품질보증 소개</h3>
                                            </div>
                                            <div className="depth2_right">
                                                <ul className="depth2_list">
                                                    <li><a href="#">검사필증 선발행</a></li>
                                                    <li><a href="#">납품검사 관리</a></li>
                                                    <li><a href="#">시험성적서 분석</a></li>
                                                    <li><a href="#">시정조치</a></li> 
                                                    <li><a href="#">불합격 판정조회</a></li> 
                                                    <li><a href="#">ERP 승인(자동)</a></li> 
                                                    <li><a href="#">ERP 미승인 물품조회</a></li> 
                                                </ul>
                                            </div>
                                        </ul>            
                                    </div>      
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header_right">
                        <ul className="header_util">
                            <li className="header_user">
                                <span className="user">
                                    <strong>홍길동 님</strong>
                                </span>
                            </li>
                            <li className="header_logout">
                                <button type="button" className="header_logiut_btn">로그아웃</button>
                            </li>
                            <li className="header_menu_toggle">
                                <button type="button" className="header_menu_toggle_btn">메뉴</button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* header_menu_popup: S */}
                <div className="header_menu_popup_wrap">
                    <div className="header_menu_popup">
                        <div className="header_menu_list">
                            <div className="header_menu_list_top">
                                <h3 className="header_menu_list_tit"><i className="header_menu_list_ico current"></i>업무현황</h3>
                            </div>
                            <div className="header_menu_list_bottom">
                                <ul className="depth">
                                    <li>
                                        <a href="#">납품검사현황</a>
                                    </li>
                                    <li>
                                        <a href="#">일반현황</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header_menu_list">
                            <div className="header_menu_list_top">
                                <h3 className="header_menu_list_tit"><i className="header_menu_list_ico test"></i>납품검사</h3>
                            </div>
                            <div className="header_menu_list_bottom">
                                <ul className="depth">
                                    <li>
                                        <a href="#">검사필증 선발행</a>
                                    </li>
                                    <li>
                                        <a href="#">납품검사 관리</a>
                                    </li>
                                    <li>
                                        <a href="#">시험성적서 분석</a>
                                    </li>
                                    <li>
                                        <a href="#">시정조치</a>
                                    </li>
                                    <li>
                                        <a href="#">불합격 판정조회</a>
                                    </li>
                                    <li>
                                        <a href="#">ERP 승인(자동)</a>
                                    </li>
                                    <li>
                                        <a href="#">ERP 미승인 물품조회</a>
                                    </li>
                                    <li>
                                        <a href="#">인증시험 관리</a>
                                    </li>
                                    <li>
                                        <a href="#">선납신청 및 조회<br />(결과조회)</a>
                                    </li>
                                    <li>
                                        <a href="#">선납신청 및 조회<br />(신청서 작성)</a>
                                    </li>
                                    <li>
                                        <a href="#">선납신청 및 조회<br />(QAS선납 승인)</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header_menu_list">
                            <div className="header_menu_list_top">
                                <h3 className="header_menu_list_tit"><i className="header_menu_list_ico analyze"></i>사후품질 분석</h3>
                            </div>
                            <div className="header_menu_list_bottom">
                                <ul className="depth">
                                    <li>
                                        <a href="#">주장비 A/S율</a>
                                    </li>
                                    <li>
                                        <a href="#">주장비 전체 A/S율</a>
                                    </li>
                                    <li>
                                        <a href="#">중기계 A/S율</a>
                                    </li>
                                    <li>
                                        <a href="#">중기계 전체 A/S율</a>
                                    </li>
                                    <li>
                                        <a href="#">전송 A/S율</a>
                                    </li>
                                    <li>
                                        <a href="#">중기계 운용 A/S건수</a>
                                    </li>
                                    <li>
                                        <a href="#">전송 운용 A/S건수</a>
                                    </li>
                                    <li>
                                        <a href="#">주장비 운용 A/S건수<br />(업체별)</a>
                                    </li>
                                    <li>
                                        <a href="#">중계기 운용 A/S건수<br />(업체별, 고장유형별)</a>
                                    </li>
                                    <li>
                                        <a href="#">주장비 운용 A/S건수<br />(업체별 세부현황)</a>
                                    </li>
                                    <li>
                                        <a href="#">중계기 운용 A/S건수<br />(업체별 세부현황)</a>
                                    </li>
                                    <li>
                                        <a href="#">ERP 계약 Data</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header_menu_list">
                            <div className="header_menu_list_top">
                                <h3 className="header_menu_list_tit"><i className="header_menu_list_ico community"></i>커뮤니티</h3>
                            </div>
                            <div className="header_menu_list_bottom">
                                <ul className="depth">
                                    <li>
                                        <a href="#">공지사항</a>
                                    </li>
                                    <li>
                                        <a href="#">Q&A</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header_menu_list">
                            <div className="header_menu_list_top">
                                <h3 className="header_menu_list_tit"><i className="header_menu_list_ico management"></i>관리</h3>
                            </div>
                            <div className="header_menu_list_bottom">
                                <ul className="depth">
                                    <li>
                                        <a href="#">물품관리</a>
                                    </li>
                                    <li>
                                        <a href="#">신규 물품관리</a>
                                    </li>
                                    <li>
                                        <a href="#">물품분류 관리</a>
                                    </li>
                                    <li>
                                        <a href="#">품질검사 제외품목 관리</a>
                                    </li>
                                    <li>
                                        <a href="#">시험성적서</a>
                                    </li>
                                    <li>
                                        <a href="#">협력사</a>
                                    </li>
                                    <li>
                                        <a href="#">협력사 품질관리</a>
                                    </li>
                                    <li>
                                        <a href="#">사용자관리</a>
                                    </li>
                                    <li>
                                        <a href="#">홈 관리</a>
                                    </li>
                                    <li>
                                        <a href="#">임대설비 관리</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header_menu_list">
                            <div className="header_menu_list_top">
                                <h3 className="header_menu_list_tit"><i className="header_menu_list_ico system"></i>시스템 관리</h3>
                            </div>
                            <div className="header_menu_list_bottom">
                                <ul className="depth">
                                    <li>
                                        <a href="#">사용자 및 권한관리</a>
                                    </li>
                                    <li>
                                        <a href="#">로그관리</a>
                                    </li>
                                    <li>
                                        <a href="#">메뉴관리</a>
                                    </li>
                                    <li>
                                        <a href="#">코드관리</a>
                                    </li>
                                    <li>
                                        <a href="#">메시지 관리</a>
                                    </li>
                                    <li>
                                        <a href="#">조직 관리</a>
                                    </li>
                                    <li>
                                        <a href="#">시스템 관리</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>    
                {/* header_menu_popup: E */}
            </header>
            {/* header: E */}

            {/* container : S */}
                <div className="container">
                    {/* aside : S */}
                    <aside className="lnb">
                        <div className="lnb_top_area">
                            <h2 className="lnb_top_area_tit">납품검사</h2>
                        </div>
                        <ul className="lnb_menu">
                            <li>
                                <a href="#">검사필증 선발행</a>
                            </li>
                            <li className="depth active">
                                <a href="#">납품검사 관리</a>
                                <ul className="depth2">
                                    <li className="active"><a href="#">납품검사 관리</a></li>
                                    <li><a href="#">납품검사 관리</a></li>
                                    <li><a href="#">납품검사 관리</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">시험성적서 분석</a>
                            </li>
                            <li>
                                <a href="#">시정조치</a>
                            </li>
                            <li>
                                <a href="#">불합격 판정조회</a>
                            </li>
                            <li>
                                <a href="#">ERP 승인(자동)</a>
                            </li>
                            <li>
                                <a href="#">ERP 미승인 물품조회</a>
                            </li>
                            <li>
                                <a href="#">인증시험 관리</a>
                            </li>
                            <li>
                                <a href="#">선납신청 및 조회</a>
                            </li>
                            <li>
                                <a href="#">QAS선납 승인</a>
                            </li>
                        </ul>
                    </aside>
                    {/* aside : E */}

                    {/* contents : S */}
                    <div className="contents">
                    {children}
                    </div>
                </div>
                {/* container : E */}

                {/* footer : S */}
                <footer className="footer">
                    <div className="footer_wrap">
                        <p className="footer_copy">CopyrightⓒSK Telecom Co., Ltd. All Rights Reserved.</p>
                    </div>
                </footer>
                {/* footer : E */}
            </div>
        </body>
        </html>
    );
}
