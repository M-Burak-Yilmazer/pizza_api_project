"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
const Token = require("../controllers/token");
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */


router.route("/").get(Token.list).post(Token.create);

router
  .route("/:id")
  .get(Token.read)
  .put(Token.update)
  .patch(Token.update)
  .delete(Token.delete);

  module.exports = router;