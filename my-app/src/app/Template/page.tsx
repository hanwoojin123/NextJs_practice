export default function AboutPage() {
    return (
        <>
            <div className="section">
                {/* tit_area : S */}
                <div className="tit_area">
                    <div className="left">
                        <h2 className="tit">대타이틀</h2>
                    </div>
                    <div className="right">
                        <ul className="location">
                            <li className="home"><a href="#">home</a></li>
                            <li><a href="#">납품검사</a></li>
                            <li><strong>납품검사관리</strong></li>
                        </ul>
                    </div>
                </div>
                {/* tit_area : E */}

                {/* sub_tit_area : S */}
                <div className="sub_tit_area">
                    <div className="left">
                        <h3 className="tit">중타이틀</h3>
                    </div>
                    <div className="right"></div>
                </div>
                {/* sub_tit_area : E */}

                {/* sub_tit_area : S */}
                <div className="sub_tit_area detail">
                    <div className="left">
                        <span className="total">Total<em className="total_num">98270</em></span>
                    </div>
                    <div className="right">
                        <div className="flex_wrap">
                            <div className="form_search w216">
                                <input type="text" className="form_control wp100" placeholder="placeholder" />  
                                <button className="btn_search" type="button"><i className="ico20 search"></i></button>
                            </div>
                            <div className="btn_search_group">
                                <button type="button" className="lbtn green">엑셀<i className="ico12 download"></i></button>
                                <button type="button" className="btn gray">신청삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* sub_tit_area : E */}

                {/* tbl_style01 : S */}
                <div className="tbl_style01_wrap">
                    <table className="tbl_style01 detail">
                        <colgroup>
                            <col style={{width: '50px'}} />
                            <col style={{width: '200px'}} />
                            <col style={{width: '150px'}} />
                            <col />
                            <col />
                            <col style={{width: '250px'}} />
                            <col style={{width: '180px'}} />
                            <col style={{width: '200px'}} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>
                                    <div className="chk_wrap checkbox">
                                        <span className="chk_custom">
                                            <input type="checkbox" name="chkAll" id="chkAll" />
                                            <label htmlFor="chkAll"></label>
                                        </span>
                                    </div>
                                </th>
                                <th>신청번호</th>
                                <th>계약번호<button type="button" className="arrow_updown"><i className="ico12 arrow_down"></i></button></th>
                                <th>검사구분 (협력사)<button type="button" className="arrow_updown"><i className="ico12 arrow_up"></i></button></th>
                                <th>주요검사물품명</th>
                                <th>상태 (ERP등록번호)</th>
                                <th>처리담당자</th>
                                <th>신청일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="chk_wrap checkbox">
                                        <span className="chk_custom">
                                            <input type="checkbox" name="chk" id="chk_01" />
                                            <label htmlFor="chk_01"></label>
                                        </span>
                                    </div>
                                </td>
                                <td>DM202311090001</td>
                                <td>4260157876</td>
                                <td><strong>난품지시 행복나래 주식회사</strong></td>
                                <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                                <td><span className="situation application">신청</span></td>
                                <td><strong>홍정호님</strong></td>
                                <td>2023-11-09</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="chk_wrap checkbox">
                                        <span className="chk_custom">
                                            <input type="checkbox" name="chk" id="chk_02" />
                                            <label htmlFor="chk_02"></label>
                                        </span>
                                    </div>
                                </td>
                                <td>DM202311090001</td>
                                <td>4260157876</td>
                                <td><strong>난품지시 행복나래 주식회사</strong></td>
                                <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                                <td><span className="situation pass">합격</span></td>
                                <td><strong>홍정호님</strong></td>
                                <td>2023-11-09</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="chk_wrap checkbox">
                                        <span className="chk_custom">
                                            <input type="checkbox" name="chk" id="chk_03" />
                                            <label htmlFor="chk_03"></label>
                                        </span>
                                    </div>
                                </td>
                                <td>DM202311090001</td>
                                <td>4260157876</td>
                                <td><strong>난품지시 행복나래 주식회사</strong></td>
                                <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                                <td><span className="situation pass">합격</span></td>
                                <td><strong>홍정호님</strong></td>
                                <td>2023-11-09</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="chk_wrap checkbox">
                                        <span className="chk_custom">
                                            <input type="checkbox" name="chk" id="chk_04" />
                                            <label htmlFor="chk_04"></label>
                                        </span>
                                    </div>
                                </td>
                                <td>DM202311090001</td>
                                <td>4260157876</td>
                                <td><strong>난품지시 행복나래 주식회사</strong></td>
                                <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                                <td><span className="situation pass">합격<em className="pass_num">2023110055</em></span></td>
                                <td><strong>홍정호님</strong></td>
                                <td>2023-11-09</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="chk_wrap checkbox">
                                        <span className="chk_custom">
                                            <input type="checkbox" name="chk" id="chk_05" />
                                            <label htmlFor="chk_05"></label>
                                        </span>
                                    </div>
                                </td>
                                <td>DM202311090001</td>
                                <td>4260157876</td>
                                <td><strong>난품지시 행복나래 주식회사</strong></td>
                                <td><strong>23년 분배기_행복나래(링크텍)</strong></td>
                                <td><span className="situation pass">합격<em className="pass_num">2023110055</em></span></td>
                                <td><strong>홍정호님</strong></td>
                                <td>2023-11-09</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* tbl_style01 : E */}

                {/* btm_area : S */}
                <div className="btm_area">
                    <div className="left"></div>
                    <div className="paging_area">
                        <button type="button" className="first">first</button>
                        <button type="button" className="prev">prev</button>
                        <button type="button" className="pag_num active">1</button>
                        <button type="button" className="pag_num">2</button>
                        <button type="button" className="pag_num">3</button>
                        <button type="button" className="pag_num">4</button>
                        <button type="button" className="pag_num">5</button>
                        <button type="button" className="next">next</button>
                        <button type="button" className="last">last</button>
                    </div>
                    <div className="right"></div>
                </div>
                {/* btm_area : E */}

                {/* sub_tit_area : S */}
                <div className="sub_tit_area">
                    <div className="left">
                        <h3 className="tit">검색테이블</h3>
                    </div>
                    <div className="right"></div>
                </div>
                {/* sub_tit_area : E */}

                {/* search_area : S */}
                <div className="search_area">
                    <ul className="search_list_area">
                        <li>
                            <dl>
                                <dt><strong className="label">주요검사물품명</strong></dt>
                                <dd>
                                    <input type="text" className="form_control wp100" placeholder="Placeholder" />
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">플랜트</strong></dt>
                                <dd>
                                    <select className="form_control wp100">
                                        <option>Placeholder</option>
                                        <option>선택1</option>
                                        <option>선택2</option>
                                        <option>선택3</option>
                                    </select>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">투자구분</strong></dt>
                                <dd>
                                    <select className="form_control wp100">
                                        <option>Placeholder</option>
                                        <option>선택1</option>
                                        <option>선택2</option>
                                        <option>선택3</option>
                                    </select>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">검사구분</strong></dt>
                                <dd>
                                    <select className="form_control wp100">
                                        <option>Placeholder</option>
                                        <option>선택1</option>
                                        <option>선택2</option>
                                        <option>선택3</option>
                                    </select>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">검사방법</strong></dt>
                                <dd>
                                    <select className="form_control wp100">
                                        <option>Placeholder</option>
                                        <option>선택1</option>
                                        <option>선택2</option>
                                        <option>선택3</option>
                                    </select>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">상태구분</strong></dt>
                                <dd>
                                    <select className="form_control wp100">
                                        <option>Placeholder</option>
                                        <option>선택1</option>
                                        <option>선택2</option>
                                        <option>선택3</option>
                                    </select>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">협력사명</strong></dt>
                                <dd>
                                    <input type="text" className="wp100 form_control" placeholder="Placeholder" />
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">원천제조사명</strong></dt>
                                <dd>
                                    <input type="text" className="wp100 form_control" placeholder="Placeholder" />
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">장비군</strong></dt>
                                <dd>
                                    <select className="form_control wp100">
                                        <option>Placeholder</option>
                                        <option>선택1</option>
                                        <option>선택2</option>
                                        <option>선택3</option>
                                    </select>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">발주팀</strong></dt>
                                <dd>
                                    <input type="text" className="wp100 form_control" placeholder="Placeholder" />
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">담당자</strong></dt>
                                <dd>
                                    <select className="form_control wp100">
                                        <option>Placeholder</option>
                                        <option>선택1</option>
                                        <option>선택2</option>
                                        <option>선택3</option>
                                    </select>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">AFE차수</strong></dt>
                                <dd>
                                    <select className="form_control wp100">
                                        <option>Placeholder</option>
                                        <option>선택1</option>
                                        <option>선택2</option>
                                        <option>선택3</option>
                                    </select>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">계약번호</strong></dt>
                                <dd>
                                    <input type="text" className="wp100 form_control" placeholder="Placeholder" />
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">신청번호</strong></dt>
                                <dd>
                                    <input type="text" className="wp100 form_control" placeholder="Placeholder" />
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">서비스명</strong></dt>
                                <dd>
                                    <input type="text" className="wp100 form_control" placeholder="Placeholder" />
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><strong className="label">신청기간</strong></dt>
                                <dd>
                                    <div className="flex_wrap date">
                                        <div className="datepicker">
                                            <input type="text" className="datepicker form_control" placeholder="0000.00.00" />
                                        </div>
                                        <span>~</span>
                                        <div className="datepicker">
                                            <input type="text" className="datepicker form_control" placeholder="0000.00.00" />
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                    <div className="search_btn_area">
                        <button type="button" className="btn"><i className="ico12 search_W"></i>조회</button>
                    </div>
                </div>
                {/* search_area : E */}

                {/* sub_tit_area : S */}
                <div className="sub_tit_area">
                    <div className="left">
                        <h3 className="tit">검색테이블</h3>
                    </div>
                    <div className="right"></div>
                </div>
                {/* sub_tit_area : E */}

                {/* tbl_style01 list : S */}
                <table className="tbl_style02 list">
                    <colgroup>
                        <col style={{ width: '165px' }} />
                        <col />
                        <col style={{ width: '165px' }} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>텍스트</th>
                            <td>경기도 포천시 군내면 좌의길 8 선우커뮤니케이션</td>
                            <th>기간</th>
                            <td>
                                <div className="flex_wrap date">
                                    <div className="datepicker">
                                        <input type="text" className="datepicker form_control" placeholder="0000.00.00" />
                                    </div>
                                    <span>~</span>
                                    <div className="datepicker">
                                        <input type="text" className="datepicker form_control" placeholder="0000.00.00" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>셀렉트</th>
                            <td>
                                <select className="form_control">
                                    <option>Select</option>
                                    <option>선택1</option>
                                    <option>선택2</option>
                                    <option>선택3</option>
                                </select>
                            </td>
                            <th>입력+텍스트버튼</th>
                            <td>
                                <div className="flex_wrap">
                                    <input type="text" className="form_control" placeholder="Placeholder" />
                                    <button type="button" className="lbtn gray">button sample</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>체크</th>
                            <td>
                                <div className="chk_wrap checkbox">
                                    <span className="chk_custom">
                                        <input type="checkbox" name="label" id="label1" />
                                        <label htmlFor="label1">Lable</label>
                                    </span>
                                    <span className="chk_custom">
                                        <input type="checkbox" name="label" id="label2" />
                                        <label htmlFor="label2">Lable2</label>
                                    </span>
                                    <span className="chk_custom">
                                        <input type="checkbox" name="label" id="label3" />
                                        <label htmlFor="label3">Lable3</label>
                                    </span>
                                </div>
                            </td>
                            <th>라디오</th>
                            <td>
                                <div className="flex_wrap radio_wrap w245">
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn" id="radio_01" />
                                        <label htmlFor="radio_01">Radio</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn" id="radio_02" />
                                        <label htmlFor="radio_02">Radio2</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn" id="radio_03" />
                                        <label htmlFor="radio_03">Radio3</label>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>입력</th>
                            <td>
                                <input type="text" className="form_control" placeholder="Placeholder" />
                            </td>
                            <th>셀렉트+입력</th>
                            <td>
                                <div className="flex_wrap">
                                    <select className="form_control w117">
                                        <option>Select</option>
                                        <option>선택1</option>
                                        <option>선택2</option>
                                        <option>선택3</option>
                                    </select>
                                    <input type="text" className="form_control" placeholder="Placeholder" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="textarea">textarea</th>
                            <td colSpan={3}>
                                <textarea placeholder="텍스트를 입력해주세요." rows={3} className="wp100 form_control" ></textarea>
                                <p className="text_count"><span className="text_count_cur">0</span> <span>/</span> <span className="text_count_total">100</span></p>
                            </td>
                        </tr>
                        <tr>
                            <th>필수입력항목<em className="input_required">*</em></th>
                            <td>
                                <input type="text" className="form_control" placeholder="Placeholder" />
                            </td>
                            <th>input readonly</th>
                            <td>
                                <input type="text" className="form_control" placeholder="Placeholder" readOnly />
                            </td>
                        </tr>
                        <tr>
                            <th>Search</th>
                            <td colSpan={3}>
                                <div className="form_search w245">
                                    <input type="text" className="form_control wp100" placeholder="Placeholder" />
                                    <button className="btn_search" type="button"><i className="ico20 search"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* tbl_style01 list : E */}

                {/* button set : S */}
                <div className="btn_set_tit_area">
                    <div className="left">
                        <h2 className="tit">Button Set(Size)</h2>
                        <p className="desc">기본 버튼으로 모든 페이지에 적용이 가능한 버튼셋</p>
                    </div>
                    <div className="right">
                    </div>
                </div>

                <div className="btn_set_wrap btn_set">
                    <div className="left">
                        <div className="btn_tit_area">
                            <h4 className="btn_tit">small<br /><em className="btn_size_num">32</em></h4>
                        </div>
                        <div className="btn_tit_area">
                            <h4 className="btn_tit">large<br /><em className="btn_size_num">40</em></h4>
                        </div>
                    </div>
                    <div className="right">
                        <div className="btn_wrap">
                            <div className="btn_basic">
                                <button type="button" className="btn">button sample</button>
                                <button type="button" className="btn" disabled>button sample</button>
                            </div>
                            <div className="btn_plus">
                                <button type="button" className="btn"><i className="ico12 plus"></i>button sample</button>
                                <button type="button" className="btn red"><i className="ico12 plus"></i>button sample</button>
                                <button type="button" className="lbtn"><i className="ico12 plus"></i>button sample</button>
                            </div>
                            <div className="btn_ico_etc">
                                <button type="button" className="btn">button sample<i className="ico12 arrow"></i></button>
                                <button type="button" className="btn green">button sample<i className="ico12 download"></i></button>
                                <button type="button" className="lbtn green">button sample<i className="ico12 download"></i></button>
                            </div>
                            <div className="btn_large">
                                <button type="button" className="btn large">button sample</button>
                                <button type="button" className="btn large">button sample<i className="ico16 arrow_L"></i></button>
                                <button type="button" className="btn large"><i className="ico16 plus_L"></i>button sample</button>
                                <button type="button" className="btn large" disabled>button sample</button>
                            </div>
                        </div>
                        <div className="btn_ico_wrap">
                            <button type="button" className="lbtn only_ico"><i className="ico12 down_P"></i></button>
                            <button type="button" className="btn only_ico"><i className="ico12 search_W"></i></button>
                            <button type="button" className="btn gray only_ico"><i className="ico12 up"></i></button>
                            <button type="button" className="btn light_purple only_ico"><i className="ico12 down"></i></button>
                        </div>
                    </div>
                </div>
                {/* button set : E */}

                {/* solid button : S */}
                <div className="btn_set_tit_area">
                    <div className="left">
                        <h2 className="tit">Solid Button</h2>
                    </div>
                    <div className="right">
                    </div>
                </div>

                <div className="btn_tit_area solid_tit">
                    <h4 className="btn_tit">Primary</h4>
                    <h4 className="btn_tit">Gray</h4>
                </div>

                <div className="btn_set_wrap solid">
                    <div className="left">
                        <div className="btn_tit_area">
                            <h4 className="btn_tit">Default</h4>
                        </div>
                        <div className="btn_tit_area">
                            <h4 className="btn_tit">Hover</h4>
                        </div>
                    </div>

                    <div className="right">
                        <div className="btn_wrap">
                            <div className="btn_group">
                                <button type="button" className="btn">button sample</button>
                                <button type="button" className="btn hover">button sample</button>
                                <button type="button" className="btn medium">button sample</button>
                            </div>
                            <div className="btn_group">
                                <button type="button" className="btn red">button sample</button>
                                <button type="button" className="btn red hover">button sample</button>
                                <button type="button" className="btn red medium">button sample</button>
                            </div>
                            <div className="btn_group">
                                <button type="button" className="btn gray">button sample</button>
                                <button type="button" className="btn gray hover">button sample</button>
                                <button type="button" className="btn gray medium">button sample</button>
                            </div>
                            <div className="btn_group">
                                <button type="button" className="btn light_purple">button sample</button>
                                <button type="button" className="btn light_purple hover">button sample</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* solid button : E */}

                {/* outline button : S */}
                <div className="btn_set_tit_area">
                    <div className="left">
                        <h2 className="tit">Outline Button</h2>
                    </div>
                    <div className="right">
                    </div>
                </div>

                <div className="btn_tit_area top outline_tit">
                    <h4 className="btn_tit">Primary</h4>
                    <h4 className="btn_tit">Gray</h4>
                    <h4 className="btn_tit">Etc</h4>
                </div>

                <div className="btn_set_wrap outline">
                    <div className="left">
                        <div className="btn_tit_area">
                            <h4 className="btn_tit">Default</h4>
                        </div>
                        <div className="btn_tit_area">
                            <h4 className="btn_tit">Hover</h4>
                        </div>
                        <div className="btn_tit_area">
                            <h4 className="btn_tit">Disabled</h4>
                        </div>
                    </div>

                    <div className="right">
                        <div className="btn_wrap">
                            <div className="btn_group">
                                <button type="button" className="lbtn">button sample</button>
                                <button type="button" className="lbtn hover">button sample</button>
                                <button type="button" className="lbtn" disabled>button sample</button>
                            </div>
                            <div className="btn_group">
                                <button type="button" className="lbtn red">button sample</button>
                                <button type="button" className="lbtn red hover">button sample</button>
                                <button type="button" className="lbtn red" disabled>button sample</button>
                            </div>
                            <div className="btn_group">
                                <button type="button" className="lbtn gray">button sample</button>
                                <button type="button" className="lbtn gray hover">button sample</button>
                                <button type="button" className="lbtn gray" disabled>button sample</button>
                            </div>
                            <div className="btn_group">
                                <button type="button" className="lbtn green">button sample</button>
                                <button type="button" className="lbtn green hover">button sample</button>
                                <button type="button" className="lbtn green" disabled>button sample</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* outline button : E */}
            </div>
        </>
    );
}