import React from 'react';
import Carusela from './carusela';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";

export const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <br />
            <img src='../פרסומת.png' style={{ maxWidth: '80%', height: 'auto', textAlign: 'center', marginLeft: '10%', marginBottom: '10px' }}></img>
            <br />

            <div style={{ width: '75%', margin: '0 auto', textAlign: 'center' }}>

                <div><Carusela /></div>
                <br />
                <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                    <Button label='לרכישה' severity="secondary" aria-label="Bookmark" onClick={() => { navigate("/list/bracelet") }} />
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                    <div>
                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>
                            האתר הרשמי של תכשיטי פנדורה | PANDORA
                        </p>
                        <p>
                            מותג תכשיטים לאישה שנוסד בדנמרק ב-1982 ומאז הוא נחשב לאחד ממותגי חנויות התכשיטים לנשים האהובים בעולם. מגוון עיצובים יפהפיים של תכשיטי כסף אמיתי כמו: טבעות, עגילים, שרשראות, צמידים וצ’ארמס מחומרי גלם איכותיים כמו כסף סטרלינג, Pandora רוז, Pandora Shine (כסף סטרלינג בציפוי זהב K18) ושיבוצי זרקונים וקריסטלים במגוון צבעים. עבודות צורפות ושיבוץ המדויקות של רשת חנויות תכשיטי נשים של חברת PANDORA, נעשות בטכניקות חדשניות וחומרי הגלם האיכותיים – מכסף סטרלינג 925, PANDORA רוז וה- SHINE קולקציית תכשיטי כסף סטרלינג בציפוי זהב K18, הם חזית המותג וההקפדה עליהם היא מה שהופך את תכשיטי רשת PANDORA לאחד ממותגי חנות התכשיטים לאישה הנחשקים בעולם. הקולקציות הייחודיות של המותג מושלמות עבור פאשניסטות המחפשות את הטרנד הבא וגם לנשים המבקשות להעניק את הסטייל שלהן על תכשיטים עם עיצובים קלאסיים ועל זמניים.
                        </p>
                    </div>
                    <img src='https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/06/PNGTRPNT_SS23_C_preMothersDay_Moments_Giftsets_02_Box_RGB.png.webp' style={{ maxWidth: '45%', height: 'auto' }} />
                </div>

            </div>

            <img src='שווה.png' style={{ maxWidth: '85%', height: 'auto', textAlign: 'center', marginLeft: '7.5%', marginTop: '10px' }}></img>

            <div className="card flex flex-column align-items-center gap-3 " style={{ width: '30%', display: 'flex', margin: 'auto' }}>
                <button id="newsletter-submit" href="javascript:void(0);">הירשם</button>
                <input type="text" id="newsletter_email" placeholder="דואר אלקטרוני" />
            </div>
        </>
    );
}
