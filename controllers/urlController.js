const { Url } = require("../models");

exports.shortenUrl = async (req, res) => {
  const { original_url } = req.body;

  if (!original_url) {
    return res.status(400).json({ message: "originalUrl is required" });
  }

  try {
    const { nanoid } = await import("nanoid");
    const serverHost = req.get("host");
    const protocol = req.protocol;

    const existingUrl = await Url.findOne({ where: { original_url } });

    if (existingUrl) {
      return res.json({ short_url: `${protocol}://${serverHost}/${existingUrl.short_url}` });
    }

    const short_url = nanoid(6);

    const newUrl = await Url.create({ short_url: short_url, original_url: original_url });


    res.json({ short_url: `${protocol}://${serverHost}/${newUrl.short_url}` });
  }
  catch (error) {
    console.error("Erro ao encurtar URL:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
}

exports.redirectUrl = async (req, res) => {
  const { short_url } = req.params;

  if (!short_url) {
    return res.status(404).json({
      message: "Url not found"
    });
  }

  try {
    const url = await Url.findOne({ where: { short_url: short_url } });

    if (!url) {
      return res.status(404).json({ error: "URL encurtada não encontrada" });
    }

    res.redirect(url.original_url)
  }
  catch (error) {
    console.error("Erro ao redirecionar:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
}