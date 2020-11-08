const UserNote = require("../model/note")


// @desc     Get single Notes
// @Rout     GET/api/v1/note/:id
// @access   Public

exports.getUserNote = async (req, res, next) => {
    try {
        const note = await UserNote.findById(req.params.id)

        res.status(200).json({success:true, data: note})
    } catch (error) {
        res.status(500).json({success:false, msg: 'Internal sever error'})
    }
}

// @desc     Create Note
// @Rout     POST/api/v1/note
// @access   Public

exports.createNote = async (req, res, next) => {
   try {
        const note = await UserNote.create(req.body)
        const url = `http;//localhost:5000/view-note/${note._id}`
        res.status(201).json({
            success: true,
            msg: "creat new note",
            url: url,
        })
   } catch (error) {
    res.status(500).json({success:false, msg: 'Internal sever error'})
   }

}

// @desc     Fetch all user notes
// @Rout     POST/api/v1/note/:email
// @access   Public

exports.getUserAllNotes = async (req, res, next) => {
    try {
        const {email} = req.params;
        const notes = await UserNote.find(email)
        res.status(200).json({success:true, data: notes})
    } catch (error) {
        res.status(500).json({success:false, msg: 'Internal sever error'})
    }

}