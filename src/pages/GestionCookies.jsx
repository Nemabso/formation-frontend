import React from 'react';
import { Link } from 'react-router-dom';
import idoinlogo from "./imag/logoIdoine.png";

export default function GestionCookies() {
    return (
        <div className='container col-12 pt-5 pb-5'>
            <div>
                <h1>Qui sommes-nous ?</h1>
                <h2 className='fs-5'>Le site IDOINEFORMATION.FR est la propriété de la SAS Idoine Transaction Conseil inscrit numéro de Siret 879238723RCS.Lyon</h2>
                <h4>Adresse de courrier électronique : <u> dominique.idoine@orange.fr</u></h4>
                <h4>Pour plus d’informations, consultez <Link to={"/mentionlegales"}><u> les mentions légales du site.</u></Link></h4>
            </div>

            <div>
                <h2>Utilisation de cookies</h2>
                <h4>Dans l’objectif notamment de rendre les services du site plus performants, vous êtes informés que le site utilise des « cookies », traceurs et/ou témoins de connexion.</h4>
                <h4>Lors de vos visites sur le site d’IDOINE FORMATION, des cookies sont susceptibles d’être installés dans votre terminal sous réserve des choix et options, le cas échéant, que vous avez fait au moment où notre module de gestion des cookies s’est affiché.</h4>
            </div>
            <div>
                <h2>Pourquoi cette politique cookies ?</h2>
                <h4>Cette politique d’utilisation et de gestion des cookies est mise à votre disposition dans un souci d’information et de transparence.
                    IDOINE FORMATION a défini la présente politique afin de vous permettre d’en savoir plus sur : </h4>
                <li className='fs-4'>L’origine et la finalité des informations traitées à l'occasion de votre navigation sur le site ;</li>
                <li className='fs-4'>Vos droits quant aux cookies et autres traceurs utilisés par IDOINE FORMATION.</li>
            </div>
            <div>
                <h2>Qu’est-ce qu’un cookie ?</h2>
                <h4>Les cookies sont des petits blocs de données envoyés au navigateur par un serveur web. Le terme « cookies » recouvre les différents traceurs déposés ou lus sur un ordinateur, une tablette, ou un mobile, par exemple lors de la consultation d'un site internet, d’une application, d’une publicité, ou de l'utilisation d'un logiciel.
                </h4>
                <h4>Un cookie a pour but de collecter des informations relatives à votre navigation.</h4>
                <h4>Ces informations peuvent être utilisées pour différentes finalités, notamment : pouvoir identifier les utilisateurs et leur permettre d'accéder à leur compte, comptabiliser et différencier les visites, mémoriser une langue de navigation, une date d’expiration, un domaine de réponse, réaliser des statistiques sur l’utilisation faite du site, identifier par quel site ou moteur de recherche vous êtes arrivés sur notre site etc.</h4>
            </div>
            <div>
                <h2>Quels sont les cookies utilisés par IDOINE FORMATION ?</h2>
                <h4><u>Des cookies techniques strictement nécessaires au fonctionnement du site et indispensables au fonctionnement d’un service de communication électronique.</u> </h4>
                <h4>Ces cookies étant indispensables à la navigation sur notre site, ils ne peuvent pas être désactivés et ne sont pas soumis à l’obligation légale de recueil préalable du consentement de l’internaute.</h4>
                <h4>Conformément à la législation en vigueur vous ne bénéficiez d’aucun droit d’opposition.</h4>
                <h4>Les données collectées dans ce cadre relèvent de la catégorie des données techniques. <u> Des cookies de fonctionnalité.</u> Ces cookies ne sont pas indispensables à la navigation sur notre site mais permettent d’optimiser son utilisation et d’améliorer votre expérience d’utilisateur. Ces cookies ne sont pas soumis à l’obligation légale de recueil préalable du consentement de l’internaute. Néanmoins, vous pouvez vous opposer au dépôt de ces cookies lors de votre première visite sur le site ou à tout moment en cliquant sur le lien Gestion des Cookies accessible en bas de chaque page de notre site. Les données collectées dans ce cadre relèvent de la catégorie des données techniques.</h4>
            </div>
            <div>
                <h4><u>Des cookies analytiques pour améliorer nos services.</u>Ce sont des traceurs dont la finalité se limite à la mesure de l’audience du site pour répondre à différents besoins. Ils sont strictement nécessaires au fonctionnement et aux opérations d’administration courante d’un site web ou d’une application et ne sont donc pas soumis, à l’obligation légale de recueil préalable du consentement de l’utilisateur. Vous pouvez vous opposer au dépôt de ces cookies sur votre navigateur lors de votre première visite sur le site ou à tout moment en cliquant sur le lien Gestion des Cookies accessible en bas de chaque page de notre site.
                </h4>
                <h4>Dans une démarche de transparence et par respect pour votre vie privée IDOINE FORMATION s’engage à ne déposer aucun cookie analytique sans avoir recueilli votre consentement. Les données collectées dans ce cadre relèvent de la catégorie des données techniques. Les cookies analytiques que nous utilisons garantissent votre anonymat.</h4>
            </div>
            <div>
                <h4><u>Des cookies de partage (réseaux sociaux).</u>Ces cookies nous permettent de proposer une expérience utilisateur fondée sur l’interactivité avec d’autres plateformes (vidéos, réseaux sociaux, contenus animés…). Il s’agit donc de cookies tiers déposés par les plateformes concernées.
                </h4>
                <h4>Le dépôt de ces cookies est soumis à votre consentement préalable. Vous pouvez vous y opposer lors de votre première visite sur le site ou à tout moment en cliquant sur le lien Gestion des Cookies accessible en bas de chaque page de notre site.</h4>
                <h4><u>Les cookies ainsi que leur finalité, durée et types de données collectées, que nous utilisons pour ce site sont détaillés ci-dessous :</u></h4>
            </div>
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">Cookie technique</th>
                        <th scope="col">tarteaucitron</th>
                        <th scope="col">tarteaucitron.io</th>
                        <th scope="col">L'utilisation de ce cookie permet de suivre la liste des consentements donnés par l’utilisateur pour l'ensemble des services tiers.</th>
                        <th scope="col">13 mois</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Cookie de session tiers de statistique et de suivi</th>
                        <td>_pk_cvar</td>
                        <td>Matomo</td>
                        <td>@L'utilisation de ces trois cookies permet le stockage des données de visite pendant la navigation de l'utilisateur.</td>
                        <td>30 minutes</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie de session tiers de statistique et de suivi</th>
                        <td>_pk_hsr</td>
                        <td>Matomo</td>
                        <td>L'utilisation de ces trois cookies permet le stockage des données de visite pendant la navigation de l'utilisateur.</td>
                        <td>30 minutes</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie de session tiers de statistique et de suivi</th>
                        <td>_pk_ses</td>
                        <td>Matomo</td>
                        <td>L'utilisation de ces trois cookies permet le stockage des données de visite pendant la navigation de l'utilisateur.</td>
                        <td>30 minutes</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie de session tiers de statistique et de suivi</th>
                        <td>_pk_id</td>
                        <td>Matomo</td>
                        <td>L’utilisation de ce cookie permet de déterminer si oui ou non il y a une nouvelle visite par le visiteur actuel.</td>
                        <td>13 mois</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie de session tiers de statistique et de suivi</th>
                        <td>_pk_ref</td>
                        <td>Matomo</td>
                        <td>L’utilisation de ce cookie permet d’identifier les contenus qui intéressent le plus l’utilisateur et quels usages sont faits des services proposés.</td>
                        <td>6 mois</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie de session tiers</th>
                        <td>_pk_testcookie</td>
                        <td>Matomo</td>
                        <td>L'utilisation de ce cookie permet de tester le support des cookies par le navigateur de l'utilisateur.</td>
                        <td>Suppression immédiate</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie de session tiers de statistique et de suivi</th>
                        <td>Matomo_sessid</td>
                        <td>Matomo</td>
                        <td>L'utilisation de ce cookie permet de stocker les informations de sessions utilisateur uniquement dans le cadre d’une utilisation de Matomo en mode opt-out.</td>
                        <td>Le temps de la session</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie de session tiers de statistique et de suivi</th>
                        <td>matomo_ignore</td>
                        <td>Matomo</td>
                        <td>L’utilisation de ce cookie permet d’identifier que l’utilisateur ne souhaite pas être suivi.</td>
                        <td>13 mois</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie tiers de ciblage</th>
                        <td>NID</td>
                        <td>Google reCaptcha</td>
                        <td>L’utilisation de ce cookie contenant un identifiant unique permet d’enregistrer vos préférences.</td>
                        <td>6 mois</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie tiers de fonctionnement</th>
                        <td>PREF</td>
                        <td>Youtube</td>
                        <td>L’utilisation de ce cookie permet d’enregistrer les préférences de l'utilisateur pour la configuration de pages et la lecture de vidéos.</td>
                        <td>8 mois</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie tiers de fonctionnement</th>
                        <td>VISITOR_INFO1_LIVE</td>
                        <td>Youtube</td>
                        <td>L’utilisation de ce cookie permet de détecter et résoudre les problèmes liés au service.</td>
                        <td>6 mois</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie tiers de fonctionnement</th>
                        <td>YSC</td>
                        <td>Youtube</td>
                        <td>L’utilisation de ce cookie permet de conserver et améliorer l'expérience de l'utilisateur pendant une session de navigation spécifique.</td>
                        <td>Le temps de la session</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie tiers de fonctionnement</th>
                        <td>GEUP</td>
                        <td>Youtube</td>
                        <td>L’utilisation de cet identifiant unique attribué à chaque ordinateur permet le suivi de YouTube par Google.</td>
                        <td>2 ans</td>
                    </tr>
                    <tr>
                        <th scope="row">Cookie tiers de fonctionnement</th>
                        <td>lang</td>
                        <td>Twitter</td>
                        <td>L’utilisation de ce cookie permet de mémoriser la version linguistique sélectionnée par l'utilisateur.</td>
                        <td>Le temps de la session</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h2>Quels sont vos droits ?</h2>
                <h4>Lors de votre première visite sur le site, nous vous informons de l’utilisation de cookies. </h4>
                <h4>Avant de poursuivre votre navigation, vous pourrez sélectionner l’usage que nous ferons de vos données en acceptant tous les cookies, en les refusant tous (à l’exception des cookies techniques strictement nécessaires au fonctionnement de notre site) ou en personnalisant vos choix en fonction de la finalité des cookies utilisés.
                    A ce stade, un cookie sera installé sur votre navigateur pour se souvenir de votre consentement, votre refus ou vos paramétrages dans le cadre de la personnalisation. Notez cependant que si vous supprimez ce cookie de votre navigateur, le module sera de nouveau affiché et votre consentement pourra être de nouveau demandé en fonction du type de cookies installé et/ou dont l’installation est projetée.</h4>
            </div>
            <div>
                <h2>Comment gérer les cookies ?</h2>
                <h4>Vous disposez de plusieurs options pour supprimer et/ou rejeter les cookies et autres traceurs.</h4>
                <h3>Par le biais du module de gestion que nous mettons à votre disposition</h3>
                <h4>L’acceptation, le refus et la personnalisation (à l’exception des cookies techniques strictement nécessaires au fonctionnement du site) peuvent être mis à jour à tout moment en accédant de nouveau au module de gestion des cookies.</h4>
                <h4>Ce module est accessible à tout moment en cliquant sur le lien Gestion des Cookies, présent en bas de chaque page de notre site.
                </h4>
                <h4>Vous avez donc la possibilité de revenir sur votre choix à tout moment.</h4>
            </div>
            <div>
                <h2>En paramétrant directement votre/vos navigateur/s</h2>
                <h4>Si la plupart des navigateurs sont paramétrés par défaut et acceptent l’installation de cookies, vous avez la possibilité de paramétrer votre navigateur internet de manière à accepter/refuser l’installation ou l’utilisation de cookies ou encore de choisir ceux que vous souhaitez accepter en fonction de leurs émetteurs.</h4>
                <h4>Cela vous évite d’être particulièrement vigilant lorsque l’on vous propose de paramétrer vos cookies sur chaque site internet : autrement dit, c’est une protection de plus pour votre vie privée.
                    Pour la gestion des cookies et des choix de l’utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d'aide du navigateur, qui permet à l’utilisateur de savoir de quelle manière modifier ses souhaits en matière de cookies.
                    À titre d’exemple :
                </h4>
                <li className="fs-4"><u> Pour Internet Explorer™</u></li>
                <li className="fs-4"><u> Pour Edge</u></li>
                <li className="fs-4"><u> Pour Safari™ : https://www.apple.com/legal/privacy/fr-ww/cookies/ et https://www.apple.com/legal/privacy/fr-ww/</u></li>
                <li className="fs-4"><u> Pour Chrome™</u></li>
                <li className="fs-4"><u> Pour Firefox™</u></li>
                <h4>Les principaux sites d’aide au paramétrage en fonction de votre smartphone :</h4>
                <li className="fs-4"><u> IOS</u></li>
                <li className="fs-4"><u> Android</u></li>
                <h4>L’utilisateur peut également consulter le guide de la Cnil disponible à l’adresse suivante : <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"> <u> https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser.</u></a></h4>
            </div>
            <div>
                <h4>L’enregistrement d’un cookie dans votre terminal est essentiellement subordonné à votre volonté que vous pouvez exprimer et modifier à tout moment et gratuitement à travers les choix qui vous sont offerts, dans notre module de gestion des cookies, et par les paramétrages possibles dans votre logiciel de navigation.</h4>
                <h4>À cet égard, nous attirons votre attention sur le fait qu’en paramétrant votre navigateur pour refuser les cookies, certaines fonctionnalités, pages, espaces du site peuvent être inaccessibles ou être légèrement altérés par rapport à une navigation avec cookies.</h4>
            </div>
            <div>
                <h2>Suppression des cookies</h2>
                <h4>Vous pouvez également supprimer régulièrement les cookies de l’ensemble de vos terminaux (tablettes, smartphones, ordinateurs) via votre navigateur.</h4>
            </div>
            <div>
                <h2>Conservons-nous d’autres données vous concernant ?</h2>
                <h4>Au-delà des cookies que nous utilisons dans les conditions décrites ci-dessus, nous collectons les données des utilisateurs du site dans les conditions précisées dans la politique de confidentialité et/ou dans les conditions générales d’utilisation du site.</h4>
                <h4>Pour toute question relative à l’utilisation des cookies :</h4>
                <h4>Tout utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles le concernant, ainsi que d’un droit à la limitation de traitement de ses données.
                    Pour cela une demande doit être adressée par e-mail au délégué à la protection des données d’IDOINE FORMATION à l’adresse suivante : dominique.idoine@orange.fr</h4>
                <h4>Nous vous souhaitons une excellente navigation.</h4>
                <h4>Date de la dernière mise à jour : 09 mars 2022</h4>
            </div>
            <div className='d-flex justify-content-end'>
                <img src={idoinlogo} width={200} height={150} loading='eager' alt="Idoine Formation" title='Idoine Formation' />
            </div>

        </div>
    )
}
