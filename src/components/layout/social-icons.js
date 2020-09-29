import React from 'react'

const SocialIcons = (props) => {
    const socialAccounts = [
        {
            name: "Twitter",
            link: "https://twitter.com/brentdanley",
            icon: ['fab', 'twitter'],
        },
        {
            name: "Instagram",
            link: "https://instagram.com/brentdanley",
            icon: ['fab', 'instagram'],
        },
        {
            name: "TikTok",
            link: "https://www.tiktok.com/@brentdanley",
            icon: ['fab', 'tiktok'],
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/c/BrentDanley/videos",
            icon: ['fab', 'youtube'],
        },
    ]
    return (
        <div className={props.styles.socialWrapper}>
            {socialAccounts.map(account => (
                <a href={account.link} title={`${account.name} for @brentdanley`} target="_blank" rel="noreferrer">Icon</a>
            ))}
        </div>
    )
}

export default SocialIcons