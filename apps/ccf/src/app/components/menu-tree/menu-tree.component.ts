import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NavItems } from '../toolbar/nav-items';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ConnectedPosition, Overlay } from '@angular/cdk/overlay';

/** Displays a menu overlay on smaller screens */
@Component({
  selector: 'menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.scss'],
})
export class MenuTreeComponent {
  /** Sets the menu items to the datasource */
  @Input() set treeItems(items: NavItems[]) {
    this.dataSource.data = items;
  }

  /** Icon name for the menu button */
  @Input() icon: string;

  /** Custom class name for the overlay */
  @Input() overlayClass: string;

  /** Default class name for the menu */
  @Input() treeClass: string;

  /** Position details of the overlay */
  @Input() positions: ConnectedPosition[];

  /** Flag to check if menu is open */
  isOpen = false;

  /** Id of the element on page to be scrolled to */
  scrollToId?: string;

  /** Tree Controller */
  treeControl = new NestedTreeControl<NavItems>((node) => node.children);

  /** Data source for the menu tree */
  dataSource = new MatTreeNestedDataSource<NavItems>();

  /** Scroll strategy for the overlay */
  scrollStrategy = this.overlay.scrollStrategies.block();

  /** Creates instance of Router, ViewportScroller and Overlay */
  constructor(
    private router: Router,
    private scroller: ViewportScroller,
    private readonly overlay: Overlay
  ) {}

  /** Checks if current node has children */
  hasChild = (_: number, node: NavItems) =>
    !!node.children && node.children.length > 0;

  /** Opens URL in an external window */
  externalWindow(url: string): void {
    window.open(url, '_blank');
  }

  /** Sets the scrollToId with the id of selected menu item */
  scrollTo(id: string): void {
    this.router.navigate([], { fragment: id });
    this.scrollToId = id;
  }

  /** Scrolls to the id of the selected element */
  scrollAfterDetach(): void {
    if (this.scrollToId) {
      this.scroller.scrollToAnchor(this.scrollToId);
      this.scrollToId = undefined;
    }
  }
}
