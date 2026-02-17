UploadAudioController = async (req, res) => {
  const user = req.user;

  if (!req.file) {
    return res.status(400).json({ message: "No audio file uploaded" });
  }

  // upload to cloudinary
  const result = await cloudinary.uploader.upload(req.file.path, {
    resource_type: "video", // for audio
    folder: "audio_uploads",
  });

  // save in mongodb
  const newAudio = await Audio.create({
    user: user._id,
    audioUrl: result.secure_url,
    public_id: result.public_id,
    title: req.body.title || "",
  });

  // delete local file after upload
  fs.unlinkSync(req.file.path);

  res.status(200).json({
    message: "Audio uploaded & saved",
    data: newAudio,
  });

  console.error(error);
  res.status(500).json({ message: "Upload failed" });
};

module.exports = UploadAudioController;
