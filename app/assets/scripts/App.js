import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

const mobileMenu = new MobileMenu();
/* eslint-disable */
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '85%');
/* eslint-enable */
const stickyHeader = new StickyHeader();
const modal = new Modal();
