/**
 * ParagraphProgress container
 *
 * Inject logic into ParagraphProgress component.
 */
import { connect } from 'react-redux';
import ParagraphProgress from '../components/paragraph_progress';

const mapStateToProps = (state) => ({
  // paragrah: '人有悲歡離合，月有陰晴圓缺，此事古難全。',
  paragraph: state.current_paragraph,
  progress: state.current_paragraph_progress
});

export default connect(mapStateToProps)(ParagraphProgress);
