import styles from './PageContent.module.css';

import React from 'react';

interface Props {
  children: React.ReactNode;
}

function PageContent({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}

export default PageContent;
