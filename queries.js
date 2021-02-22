const { fetch, fetchOnly } = require('./postgres')

const LANGUAGES = `

	SELECT
		*
	FROM
		languages;
`
const ROUTES = `

	SELECT
		*
	FROM
		routes;
`
const STACKS = `

	SELECT
		*
	FROM
		stacks;
`
const SPECIALIZATION = `

	SELECT
		*
	FROM
    specializations;
`

const CREATE_LANGUAGE = `
	
	INSERT INTO languages (
		language_name
	) VALUES (
		$1
	) RETURNING *
`

const languages = async () => await fetch(LANGUAGES)
const routes = async () => await fetch(ROUTES)
const stacks = async () => await fetch(STACKS)
const specializations = async () => await fetch(SPECIALIZATION)

const createLanguage = async ({ name }) => {
    return await fetchOnly(CREATE_LANGUAGE, name)
}

// const create = async ({ username }) => await fetchOne(CREATE, username, "pass1", "fName", "lName")

module.exports = { languages, routes, stacks, specializations, createLanguage }
