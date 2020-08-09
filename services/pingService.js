'use strict';

const 
    axios = require('axios'),
    validUrl = require('valid-url'),
    parser = require('url-parse');

async function confirmUrl(url) {
    console.log(`Confirming URL: ${url}`)

    if (validUrl.isWebUri(url)) return true
    else return Promise.reject('URL Not Valid')
}

async function urlIconPath(url) {
    console.log(`Parsing URL: ${url}`)

    return `${parser(url).origin}/favicon.ico`
}

async function pingDuration(url) {
    try {
        console.log(`Pinging URL: ${url}`)
        
        const startTime = new Date()
        await axios.get(url)
        const endTime = new Date()
        const duration = endTime - startTime

        return `${duration} ms`
    } catch(err) {
        return Promise.reject('URL Error')
    }
}

module.exports = {
    pingAndGetIconPath: async function(url) {
        try {
            
            await confirmUrl(url)
            const iconPath = await urlIconPath(url)
            const duration = await pingDuration(url)
            
            return {
                url: url,
                duration: duration,
                iconPath: iconPath,
            }
        } catch(err) {
            throw new Error(err)
        }
    }
}