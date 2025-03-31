const { Url } = require("../../models");

module.exports = async (req, res) => {
  const { short_url } = req.params;

  if (!short_url) {
    return res.status(404).json({
      message: "Url not found"
    });
  }

  try {
    const url = await Url.findOne({ where: { short_url: short_url } });

    if (!url) {
      return res.status(404).json({ error: "Shortened URL not found" });
    }

    res.redirect(url.original_url)
  }
  catch (error) {
    console.error("Error redirecting:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}