import Image from "next/image";
import styles from "@/styles/css/list.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.fileList}>
      <div className={styles.proListWrap}>
        <div className={styles.proListTop}>
          <div className={styles.projectName}>
            <h1>SKT QAS</h1>
          </div>
          <ul className={styles.worker}>
            <li>
              <strong>한우진 주임 [P]</strong>
              <em>|</em>010-3809-0525<em>|</em>hanwoojin3@muplus.co.kr
            </li>
          </ul>
        </div>

        <div className={styles.toggleBtnArea}>
          <strong>프로젝트 환경</strong>
          <button type="button" className={styles.toggleBtn}>
            Closed
          </button>
        </div>

        {/* ********* info ********** */}
        <table className={styles.infoTbl}>
          <colgroup>
            <col style={{ width: "180px" }} />
            <col />
            <col style={{ width: "180px" }} />
            <col />
            <col style={{ width: "180px" }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>문서 및 버전</th>
              <td>HTML5, CSS3</td>
              <th>인코딩</th>
              <td>UTF-8</td>
              <th>해상도 기준 / 디자인 너비</th>
              <td>1920</td>
            </tr>
            <tr>
              <th>웹 유형</th>
              <td>PC Web</td>
              <th>PC 웹 호환성</th>
              <td>chrome, edge, firefox</td>
              <th>SERVER</th>
              <td>http://112.217.230.10/project_/</td>
            </tr>
          </tbody>
        </table>
        {/* ********* info ********** */}

        {/* ********* Directory ********** */}
        <pre className={styles.code}>
          {`/* Directory */
my-app  
  src
    app
      Template
        _page.tsx
      Main_view
        _page.tsx
      Sub_01
        _page.tsx
      Sub_02
        _page.tsx
      Sub_03
        _page.tsx
      Sub_04
        _page.tsx
    styles
      _css
      _fonts
  public
    assets
      _images
    `}
        </pre>
        {/* ********* Directory ********** */}

        <p className={styles.total}>
          total : <span></span>
        </p>

        {/* ********* publishing list ********** */}
        <table className={styles.publishingList} id="table">
          <colgroup>
            <col style={{ width: "12%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "120px" }} />
            <col style={{ width: "12%" }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>1Depth</th>
              <th>2Depth</th>
              <th>3Depth</th>
              <th>4Depth</th>
              <th>Directory</th>
              <th>fileName(link)</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Template</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href="/Template" className={styles.linkTxt}>
                  page.tsx(Template)
                </Link>
              </td>
              <td>
                <ul className={styles.noteList}>
                  <li>
                    <em>0000-00-00</em>업데이트
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td colSpan={7} className={styles.hrLine}></td>
            </tr>

            <tr>
              <th>Main</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href="/Main_view" className={styles.linkTxt}>
                  page.tsx(Main_view)
                </Link>
              </td>
              <td>
                <ul className={styles.noteList}>
                  <li>
                    <em>0000-00-00</em>업데이트
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td colSpan={7} className={styles.hrLine}></td>
            </tr>

            <tr>
              <th rowSpan={4}>Sub</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href="/Sub_01" className={styles.linkTxt}>
                  page.tsx(Sub_01)
                </Link>
              </td>
              <td>
                <ul className={styles.noteList}>
                  <li>
                    <em>0000-00-00</em>업데이트
                  </li>
                </ul>
              </td>

            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href="/Sub_02" className={styles.linkTxt}>
                  page.tsx(Sub_02)
                </Link>
              </td>
              <td>
                <ul className={styles.noteList}>
                  <li>
                    <em>0000-00-00</em>업데이트
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href="/Sub_03" className={styles.linkTxt}>
                  page.tsx(Sub_03)
                </Link>
              </td>
              <td>
                <ul className={styles.noteList}>
                  <li>
                    <em>0000-00-00</em>업데이트
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href="/Sub_04" className={styles.linkTxt}>
                  page.tsx(Sub_04)
                </Link>
              </td>
              <td>
                <ul className={styles.noteList}>
                  <li>
                    <em>0000-00-00</em>업데이트
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        {/* ********* publishing list ********** */}
      </div>
      <p className={styles.copy}>
        Copyright ⓒ MUPLUS All Rights Reserved.
      </p>
    </div>
  );
}