const shortcuts = []

const shortcutR = {control:false, key:'r', action: selectRectTool}
const shortcutP = {control:false, key:'p', action: selectPathTool}
// const shortcutSpace = {control:false, key:'v', action: selectSelectTool}
// const shortcutUndo = {control:true, key:'z', action: undo}

shortcuts.push(shortcutR,shortcutP)

function isShortcut(control, key) {
    console.log(control,key)
    return shortcuts.find((s) => s.key === key && s.control === control)
}

function executeShortcut(control, key) {
    const shortcut = isShortcut(control,key)

    shortcut && shortcut.action()
}