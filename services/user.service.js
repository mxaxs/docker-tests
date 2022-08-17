"use strict";

const dBMixin = require("../mixins/db2.mixin");
const Sequelize = require( "sequelize" );

module.exports = {
	name: "user",
	mixins: [dBMixin( "user" )],
	model: {
		name: "user",
		define: {
			name: Sequelize.STRING,
			surname: Sequelize.STRING,
			email: Sequelize.STRING,

		}
	},
	settings: {
		fields: [
			"id",
			"name",
			"surname",
			"email",

		],
		entityValidator: {
			name: { type: "string", min: 3, max: 30 },

		}
	},
	actions: {
		hello: {
			rest: { method: "GET", path: "/user" },
			async handler() {
				return "You are in the user service";
			}
		}
	}
};
