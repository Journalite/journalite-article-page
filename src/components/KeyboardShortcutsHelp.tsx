'use client'

import { useState, useEffect } from 'react'
import styles from '@/styles/KeyboardShortcutsHelp.module.css'

interface ShortcutInfo {
  name: string;
  macKeys: string[];
  winKeys: string[];
  description: string;
}

const KeyboardShortcutsHelp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    // Detect if user is on macOS
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  const toggleHelp = () => {
    setIsOpen(!isOpen)
  }

  const shortcuts: ShortcutInfo[] = [
    { name: 'Bold', macKeys: ['⌘', 'B'], winKeys: ['Ctrl', 'B'], description: 'Make text bold' },
    { name: 'Italic', macKeys: ['⌘', 'I'], winKeys: ['Ctrl', 'I'], description: 'Italicize text' },
    { name: 'Code', macKeys: ['⌘', 'E'], winKeys: ['Ctrl', 'E'], description: 'Format as code' },
    { name: 'Link', macKeys: ['⌘', 'K'], winKeys: ['Ctrl', 'K'], description: 'Create a hyperlink' },
    { name: 'Image', macKeys: ['⌘', 'Shift', 'I'], winKeys: ['Ctrl', 'Shift', 'I'], description: 'Insert an image' },
    { name: 'Heading 1', macKeys: ['⌘', 'Option', '1'], winKeys: ['Ctrl', 'Alt', '1'], description: 'Format as heading 1' },
    { name: 'Heading 2', macKeys: ['⌘', 'Option', '2'], winKeys: ['Ctrl', 'Alt', '2'], description: 'Format as heading 2' },
    { name: 'Heading 3', macKeys: ['⌘', 'Option', '3'], winKeys: ['Ctrl', 'Alt', '3'], description: 'Format as heading 3' },
    { name: 'Bullet List', macKeys: ['⌘', 'Shift', '8'], winKeys: ['Ctrl', 'Shift', '8'], description: 'Create bullet list' },
    { name: 'Numbered List', macKeys: ['⌘', 'Shift', '7'], winKeys: ['Ctrl', 'Shift', '7'], description: 'Create numbered list' },
    { name: 'Clear Format', macKeys: ['⌘', 'Shift', 'X'], winKeys: ['Ctrl', 'Shift', 'X'], description: 'Clear text formatting' },
    { name: 'Paste with Format', macKeys: ['⌘', 'Shift', 'V'], winKeys: ['Ctrl', 'Shift', 'V'], description: 'Paste with original formatting' },
    { name: 'Paste as Plain', macKeys: ['⌘', 'V'], winKeys: ['Ctrl', 'V'], description: 'Paste as plain text' },
  ]

  return (
    <div className={styles.shortcutsContainer}>
      <button 
        type="button" 
        onClick={toggleHelp}
        className={styles.shortcutsButton}
        title="Keyboard Shortcuts"
      >
        ⌨️
      </button>

      {isOpen && (
        <div className={styles.shortcutsModal}>
          <div className={styles.shortcutsHeader}>
            <h3>Keyboard Shortcuts {isMac ? '(macOS)' : '(Windows/Linux)'}</h3>
            <button 
              type="button" 
              onClick={toggleHelp}
              className={styles.closeButton}
            >
              ×
            </button>
          </div>

          <div className={styles.shortcutsList}>
            {shortcuts.map((shortcut, index) => (
              <div key={index} className={styles.shortcutItem}>
                <div className={styles.shortcutName}>{shortcut.name}</div>
                <div className={styles.shortcutKeys}>
                  {(isMac ? shortcut.macKeys : shortcut.winKeys).map((key, keyIndex) => (
                    <span key={keyIndex} className={styles.keyboardKey}>
                      {key}
                      {keyIndex < (isMac ? shortcut.macKeys.length : shortcut.winKeys.length) - 1 && (
                        <span className={styles.keySeparator}>+</span>
                      )}
                    </span>
                  ))}
                </div>
                <div className={styles.shortcutDescription}>{shortcut.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default KeyboardShortcutsHelp 