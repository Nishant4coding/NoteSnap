import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';

class View extends Component {
  onError = (e) => {
    console.error('Error viewing file:', e);
  };

  render() {
    const { fileType, filePath } = this.props;

    return (
      <div>
        <h1>View File</h1>
        <FileViewer
          fileType={fileType}
          filePath={filePath}
          onError={this.onError}
        />
      </div>
    );
  }
}

export default View;
