export default function PageBanner({ page }) {
    const base_url = process.env.IMAGE_SERVER_URL;
    let banner = base_url + "/images/banner/banner-cira.png";
    if (page == "travel") {
        banner = base_url + "/images/banner/travel.png";
    }
    return (
        <div className="section content-section pt-1">
            <img className="home-banner" src={banner} style={{ 'width': '100%' }} />
        </div>
    );
}