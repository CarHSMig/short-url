const { Url } = require("../../models");

module.exports = async (req, res) => {
  const { short_url } = req.body;

  if (!short_url) {
    return res.status(400).json({ message: "short_url is required" });
  }

  try {
    const shortCode = short_url.replace(/^https?:\/\/[^\/]+\//, "");
    const urlEntry = await Url.findOne({ where: { short_url: shortCode } });

    if (!urlEntry) {
      return res.status(404).json({ error: "URL encurtada não encontrada" });
    }

    return res.json({
      message: "URL original encontrada",
      original_url: urlEntry.original_url
    });

  } catch (error) {
    console.error("Erro ao desencurtar a URL:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};